import { useEffect, useState } from 'react';

function defineValue(key, defaultValue) {
    const saved = localStorage.getItem(key);

    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    
    return initial;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return defineValue(key, defaultValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};
