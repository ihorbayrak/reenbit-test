import { useFetch } from '../hooks/useFetch';

export const useRickMortyService = () => {
    const { loading, request, error } = useFetch();

    const _apiBase = 'https://rickandmortyapi.com/api/';

    const getCharacters = async () => {
        const response = await request(`${_apiBase}character`);

        return response.results?.map(transformCharData);
    };

    const getCharactersByName = async (name) => {
        if (!name) return;

        const response = await request(`${_apiBase}character/?name=${name}`);

        return response.results?.map(transformCharData);
    };

    const getSingleCharacter = async (id) => {
        const response = await request(`${_apiBase}character/${id}`);

        return transformCharData(response);
    };

    const getLocation = async (url) => {
        if (!url) return;

        const response = await request(url);

        return response.name;
    };

    const transformCharData = (char) => {
        return {
            id: char.id,
            image: char.image,
            name: char.name || 'unknown',
            gender: char.gender || 'unknown',
            status: char.status || 'unknown',
            species: char.species || 'unknown',
            type: char.type || 'unknown',
            origin: char.origin.url,
        };
    };

    return {
        getCharacters,
        getSingleCharacter,
        getLocation,
        getCharactersByName,
        loading,
        error,
    };
};
