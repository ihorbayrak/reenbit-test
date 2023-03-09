import { useNavigate } from 'react-router-dom';

import './style.scss';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <div className='not-found__title'>Page not found</div>
            <button className='not-found__btn' onClick={() => navigate('/')}>
                homepage
            </button>
        </div>
    );
};

export default Page404;
