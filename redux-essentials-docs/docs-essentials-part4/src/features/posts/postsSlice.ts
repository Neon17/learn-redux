import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: string,
    title: string,
    content: string
}

const initialState: Post[] = [
    { id: "1", title: 'First Post', content: 'This is the first post' },
    { id: "2", title: 'Second Post', content: 'This is the second post' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state: Post[], action: PayloadAction<Post>) => {
            state.push(action.payload);
        }
    }
})

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
