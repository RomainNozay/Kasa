import React from 'react';
import Banner from '../components/Banner';
import BannerPicture from '../asset/img/Banner_accueil.png';
import BannerMobile from '../asset/img/Accueil_mobile.png';
import Sticker from '../components/Sticker';
import Logements from '../asset/api/logements.json';
import { NavLink } from 'react-router-dom';

function Welcome() {
    return (
            <div className='welcome'>
                <Banner picture={BannerPicture} mobilePicture={BannerMobile} title="Chez vous, partout et ailleurs" />
                <div className="all_stickers">
                {Logements.map((logement) => <NavLink key={logement.id} to={"/rental/"+logement.id+"/#"}>
                     <Sticker key={logement.id} id={logement.id} picture={logement.cover} title={logement.title} /></NavLink>)}
            </div>
            </div>
        
    );
};

export default Welcome;