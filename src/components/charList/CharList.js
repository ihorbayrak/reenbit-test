import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { useRickMortyService } from '../../services/RickMortyService';

import { sortItems } from '../../utils/functions/sortItems';

import SearchInput from '../searchInput/SearchInput';
import CharItem from '../charItem/CharItem';

import './style.scss';

const CharList = () => {
    const [charList, setCharList] = useState([]);

    const [searchValue, setSearchValue] = useLocalStorage('search', '');
    const debouncedValue = useDebounce(searchValue, 500);

    const { getCharactersByName, getCharacters, loading, error } = useRickMortyService();

    useEffect(() => {
        if (debouncedValue) return;
        getCharacters().then((res) => setCharList(res));
    }, [debouncedValue]);

    useEffect(() => {
        getCharactersByName(debouncedValue).then((res) => setCharList(res));
    }, [debouncedValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const renderChars = (arr) => {
        if (!arr) return;

        return arr.map((char) => {
            return <CharItem char={char} key={char.id} />;
        });
    };

    const chars = renderChars(sortItems(charList, 'name'));

    return (
        <>
            <SearchInput value={searchValue} handleChange={handleChange} />

            {loading && loading}
            {error && error}

            <ul className='char__list'>{chars}</ul>
        </>
    );
};

export default CharList;
