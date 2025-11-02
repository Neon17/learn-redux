import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    

    return (
        <div className="m-3 bg-amber-800 rounded p-3">
            <h1 className="mb-5">Todos</h1>
            {todos.map(todo => (
                <div key={todo.id} className="flex mt-1 gap-3 justify-center items-center">
                    <p>{todo.text}</p>
                    <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
                </div>
            ))}
        </div>
    )
}
