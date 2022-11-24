import React from 'react';

const Header = () => {
    const JSX = (
        <div className='header-container'>
            <h1>Je suis le header</h1>
            <p>1 REM = 10 pixel</p>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );

    return JSX;
};

export default Header;