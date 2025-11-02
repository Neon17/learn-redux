import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo () {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input type="text" placeholder='add todo' className='border-2 rounded-md p-2' value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' className='border-2 rounded-md p-2'>Add</button>
        </form>
    )
}
