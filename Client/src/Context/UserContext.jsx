import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [User, SetUser] = useState(false);

    return (
        <UserContext.Provider value={{ User, SetUser }}>
            {children}
        </UserContext.Provider>
    );
}
