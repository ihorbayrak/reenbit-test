import { useState } from 'react';

export const useFetch = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const request = async (
        url,
        method = 'GET',
        body = null,
        headers = { 'Content-Type': 'application/json' }
    ) => {
        setLoading('Loading...');
        setError(null)

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                console.log(response.statusText);
            }

            const data = await response.json();

            if (data.error) {
                setError(data.error);
            }

            setLoading(null);

            return data;
        } catch (e) {
            setLoading(null);
            setError('There was an error. Please try again.');

            throw e;
        }
    };

    return { loading, request, error };
};
