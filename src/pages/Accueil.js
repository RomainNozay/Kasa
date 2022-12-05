import React from 'react';
import Banner from '../components/Banner';
import banner from '../asset/img/Banner_accueil.png'
import bannerMobile from '../asset/img/Accueil_mobile.png'
import Sticker from '../components/Sticker';
const Accueil = () => {
    return (
        <>
            <div className='Accueil'>
                <Banner image={banner} imageMobile={bannerMobile} titre="Chez vous, partout et ailleurs" />
                <div className='background'>
                    <Sticker />
                    <Sticker />
                    <Sticker />
                    <Sticker />
                    <Sticker />
                    <Sticker />
                </div>
            </div>
        </>
    );
};

export default Accueil;