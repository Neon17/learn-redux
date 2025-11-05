import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: string,
    name: string
}

const initialState: User[] = [
    { id: "1", name: 'John Doe' },
    { id: "2", name: 'Jane Doe' },
    { id: "3", name: 'Bob Smith' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState,  userId: string) => 
    state.users.find(user => user.id === userId);
