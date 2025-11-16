import { useState } from "react";
import { useAppSelector } from "../../app/store";
import { selectUserById } from "./usersSlice";
import type { User } from "../../definitions/users";

export const UsersShow = () => {
    const [userId, setUserId] = useState<number>(0);
    
    const user: User | undefined = useAppSelector(state => selectUserById(state, userId));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(parseInt(event.target.value) || 0);
    };

    return (
        <>
            <div>UsersShow</div>
            {user ? (
                <div>
                    <h3>User Found:</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ) : (
                <div>User Not Found or Enter User ID</div>
            )}
        
            <input 
                type="number" 
                className="border" 
                value={userId || ''}
                onChange={handleChange}
                placeholder="Enter user ID"
            />
            <p>Current User ID: {userId}</p>
        </>
    );
};