import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/usersSlice';
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        users: usersReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

