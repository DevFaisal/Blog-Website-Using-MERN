import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [User, SetUser] = useState(null);

    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:8000/refresh", { withCredentials: true });
            console.log("User data:", res.data);
            SetUser(res.data)
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ User, SetUser, getUser }}>
            {children}
        </UserContext.Provider>
    );
}
