import React from 'react';
import Banner from '../components/Banner';
import banner from '../asset/img/Banner_accueil.png';
import bannerMobile from '../asset/img/Accueil_mobile.png';
import Sticker from '../components/Sticker';
import Logements from '../asset/api/logements.json';

const Accueil = () => {
    return (
            <div className='Accueil'>
                <Banner image={banner} imageMobile={bannerMobile} titre="Chez vous, partout et ailleurs" />
                <div className="All_stickers">
                {Logements.map((logement) => <Sticker key={logement.id} id={logement.id} image={logement.cover} title={logement.title} />)}
            </div>
            </div>
        
    );
};

export default Accueil;