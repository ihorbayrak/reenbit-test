import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRickMortyService } from '../../services/RickMortyService';

import './style.scss';

const CharPage = () => {
    const { charId } = useParams();

    const { getSingleCharacter, getLocation, loading, error } = useRickMortyService();

    const [char, setChar] = useState({});

    useEffect(() => {
        getSingleCharacter(charId).then(async (res) => {
            const origin = await getLocation(res.origin);

            setChar({ ...res, origin });
        });
    }, [charId]);

    if (loading) {
        return <div style={{ textAlign: 'center' }}>{loading}</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center' }}>{error}</div>;;
    }

    const { name, image, gender, status, species, type, origin } = char;

    return (
        <section className='details'>
            <div className='details__content'>
                <img className='details__img' src={image} alt={name} />

                <div className='details__name'>{name}</div>
                <div className='details__title'>Information</div>

                <div className='details__wrapper'>
                    <div className='details__info'>
                        gender
                        <span>{gender}</span>
                    </div>

                    <div className='details__info'>
                        status
                        <span>{status}</span>
                    </div>

                    <div className='details__info'>
                        specie
                        <span>{species}</span>
                    </div>

                    <div className='details__info'>
                        origin
                        <span>{origin || 'unknown'}</span>
                    </div>

                    <div className='details__info'>
                        type
                        <span>{type}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharPage;
