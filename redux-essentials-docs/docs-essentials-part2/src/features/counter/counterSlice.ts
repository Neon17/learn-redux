import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState, AppThunk }from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number,
    status: "idle" | "loading" | "failed"
}
const initialState: CounterState = {
    value: 0,
    status: "idle"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.value +=1 
        },
        decrement: (state: CounterState) => {
            state.value -= 1
        },
        incrementByAmount: (state: CounterState, action) => {
            state.value += action.payload
        }
    },
    extraReducers: builder => { // extraReducers let slice handle the actions defined elsewhere
        // Handle the action defined by the `incrementAsync` thunk (action creator) defined below
        builder
            .addCase(incrementAsync.pending, (state: CounterState) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state: CounterState, action: PayloadAction<number>) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state: CounterState) => {
                state.status = 'failed';
            })
    }
});

// export the above action creator for use in component
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export the slice reducer for use in the store
export default counterSlice.reducer;

// Selector functions allows us to select a value from redux root state
// Selectors are be defined inline in the `useSelector` hook or inside the `createSlice.selectors` field
export const selectCount = (state: RootState) => state.counter.value;
export const selectStatus = (state: RootState) => state.counter.status;

export const incrementIfOdd = (amount: number): AppThunk => { // Normal App Thunk
    return (dispatch, getState) => {
        const currentValue = selectCount(getState());
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount));
        }
    }
}

async function fetchCount(amount: number) {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 1000)
    );
}

// Thunk for especially working with async actions
export const incrementAsync = createAsyncThunk(
    "counter/fetchCount",
    async (amount: number) => {
        const response = await fetchCount(amount);// some API call
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
)


