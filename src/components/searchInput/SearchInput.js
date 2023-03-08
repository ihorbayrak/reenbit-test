import search from '../../assets/search.svg';

import './style.scss';

const SearchInput = ({ handleChange, value }) => {
    return (
        <div className='search__container'>
            <img src={search} alt='search' />

            <input
                type='text'
                placeholder='Filter by name...'
                name='search'
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;
