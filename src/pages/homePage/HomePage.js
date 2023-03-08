import CharList from '../../components/charList/CharList';

import logo from '../../assets/logo.png';

import './style.scss';

const HomePage = () => {
    return (
        <section className='home'>
            <div className='container'>
                <img className='home__logo' src={logo} alt='rick-n-morty' />

                <CharList />
            </div>
        </section>
    );
};

export default HomePage;
