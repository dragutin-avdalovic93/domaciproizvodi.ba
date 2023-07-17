// Header.js
import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h2 className="header-title"><a href="/">NACIONALNI PROIZVODI - BOSNA I HERCEGOVINA</a></h2>
            <div className="header-content">
                <div className="header-menu">
                    <a href="/" className="header-link">Početna</a>
                    <a href="/dodaj-proizvodjaca" className="header-link">Postani proizvođač</a>
                    <a href="/o-nama" className="header-link">O nama</a>
                </div>
            </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/2560px-Flag_of_Bosnia_and_Herzegovina.svg.png"
                alt="Zastava Bosne i Hercegovine"
                className="header-flag"
            />
        </header>
    );
};

export default Header;
