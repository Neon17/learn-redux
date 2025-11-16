import { useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../app/store"
import { fetchUsers, selectAllUsers } from "./usersSlice";
import type { User } from "../../definitions/users";


export const UsersList = () => {
    const dispatch = useAppDispatch();
    const [users, setUsers] = useState<User[]>(useAppSelector(selectAllUsers));
    const [status, setStatus] = useState(store.getState().users.status);

    const fetchUsersHere = () => {
        dispatch(fetchUsers()).then(() => {
            setStatus(store.getState().users.status);
            setUsers(store.getState().users.users);
        });
    }

    return (
        <div>
            <h2>Users List</h2>
            <p>Status: {status}</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={()=>fetchUsersHere()} 
                className="p-3 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-700">Fetch Users</button>
        </div>
    )
}
