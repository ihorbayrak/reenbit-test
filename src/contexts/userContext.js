import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user, setUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
