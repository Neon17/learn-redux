import { configureStore } from "@reduxjs/toolkit";
import type { Action } from "@reduxjs/toolkit";
import postsReducer from "@/features/posts/postsSlice";
import usersReducer from "@/features/users/usersSlice";

interface CounterState {
    value: number
}

function counterReducer (state: CounterState = {value: 0}, action: Action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
})


// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;
