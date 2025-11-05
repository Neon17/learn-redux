import { RootState } from "@/app/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

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
        postAdded: {
            reducer: (state: Post[], action: PayloadAction<Post>) => {
                state.push(action.payload);
            },
            prepare: (title: string, content: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postUpdated: (state: Post[], action: PayloadAction<Post>) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    },
    selectors: {
        selectAllPosts: postsState => postsState,
        selectPostById: (postsState, postId: string) =>
            postsState.find(post => post.id === postId)
    }
})

export const { selectAllPosts, selectPostById } = postsSlice.selectors

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;

// Below are selectors which select values;
// export const selectAllPosts = (state: RootState) => state.posts;
// export const selectPostById = (state: RootState, postId: string) => 
//     state.posts.find(post => post.id === postId);

