import { useAppDispatch, useAppSelector } from '@/app/hooks';
import React from 'react'
import { Post, postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { selectAllUsers } from '../users/usersSlice';

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement;
    postContent: HTMLInputElement;
    postAuthor: HTMLInputElement
}

interface AddPostFormElement extends HTMLFormElement {
    readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectAllUsers);

    const handleSubmit = (e: React.FormEvent<AddPostFormElement>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;
        const userId = elements.postAuthor.value;

        // dispatch(postAdded(newPost));
        dispatch(postAdded(title, content, userId));

        console.log('Values: ', { title, content });
        e.currentTarget.reset();
        e.currentTarget.elements.postTitle.value = '';
        e.currentTarget.elements.postContent.value = '';
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    return (
        <section>
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" name="" id="postTitle" defaultValue={""} required />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" name="postAuthor" required>
                    <option value=""></option>
                    {usersOptions}
                </select>
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


