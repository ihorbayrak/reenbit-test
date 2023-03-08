import { Link } from 'react-router-dom';

import './style.scss';

const CharItem = ({ char }) => {
    const { id, name, species, image } = char;

    return (
        <li className='char__item'>
            <Link to={`/details/${id}`}>
                <div className='char__img'>
                    <img src={image} alt={name} />
                </div>
                
                <div className='char__body'>
                    <h3 className='char__name'>{name}</h3>
                    <div className='char__species'>{species}</div>
                </div>
            </Link>
        </li>
    );
};

export default CharItem;
