import { useAppDispatch } from '@/app/hooks';
import React from 'react'
import { Post, postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement;
    postContent: HTMLInputElement;
}

interface AddPostFormElement extends HTMLFormElement {
    readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<AddPostFormElement>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;

        const newPost:Post = {
            id: nanoid(),
            title,
            content
        }
        // dispatch(postAdded(newPost));
        dispatch(postAdded(title, content));

        console.log('Values: ', { title, content });
        e.currentTarget.reset();
        e.currentTarget.elements.postTitle.value = '';
        e.currentTarget.elements.postContent.value = '';
    }
    return (
        <section>
            <h2>Add a new post</h2> 
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" name="" id="postTitle" defaultValue={""} required />
                <label htmlFor="postContent">Content: </label>
                <textarea 
                    name="postContent" 
                    id="postContent"
                    defaultValue={""}
                    required
                />
                <button>Save Post</button>
            </form>
        </section>
    )
}


 