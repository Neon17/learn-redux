import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../definitions/users";
import type { Status } from "../../definitions/enums";
import type { RootState } from "../../app/store";

type State = {
    status: Status,
    users: User[]
}

const initialState: State = {
    status: 'idle',
    users: []
};


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { getState }): Promise<User[]> => {
        const state = getState() as RootState;
        
        if (state.users.users.length > 0) {
            throw new Error('Users already loaded');
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // state types are unnecessary because we put return type of CreateAsyncThunk maybe
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                console.log(action.payload);
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed';
            })
    }
});


export const selectAllUsers = (state: RootState) => state.users.users;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUserById = (state: RootState, userId: number) => 
    state.users.users.find(user => user.id === userId);

export default usersSlice.reducer;



