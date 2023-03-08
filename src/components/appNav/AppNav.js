import { useLocation, useNavigate } from 'react-router-dom';

import { useContext, useMemo } from 'react';
import { UserContext } from '../../contexts/userContext';

import { checkLocation } from '../../utils/functions/checkLocation';

import {
    signInWithFacebookPopup,
    signInWithGooglePopup,
    signOutUser,
} from '../../utils/firebase/firebase';

import arrow from '../../assets/arrow.svg';

import './style.scss';

const AppNav = () => {
    const { user } = useContext(UserContext);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isDetailsRoute = useMemo(() => checkLocation(pathname, 'details'), [pathname]);

    return (
        <nav className='nav'>
            <button
                style={{ visibility: isDetailsRoute ? 'visible' : 'hidden' }}
                className='nav__back'
                onClick={() => navigate(-1)}
            >
                <img src={arrow} alt='arrow-back' /> go back
            </button>

            {user ? (
                <div className='nav__user'>
                    {user.displayName}
                    <button className='nav__out' onClick={signOutUser}>
                        sign out
                    </button>
                </div>
            ) : (
                <div className='nav__buttons'>
                    <button className='nav__facebook' onClick={signInWithFacebookPopup}>
                        sign in with facebook
                    </button>
                    <button className='nav__google' onClick={signInWithGooglePopup}>
                        sign in with google
                    </button>
                </div>
            )}
        </nav>
    );
};

export default AppNav;
