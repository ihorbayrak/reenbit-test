import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/homePage/HomePage';
import CharPage from '../../pages/charPage/CharPage';
import Page404 from '../../pages/404/Page404';
import AppNav from '../appNav/AppNav';

const App = () => {
    return (
        <>
            <AppNav />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/details/:charId' element={<CharPage />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
