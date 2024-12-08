import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header id='pageHeader'>
            <div id='headerContent'>
                <div id='logo'>
                    <img src="/images/NKGlavice-grb.jpg" alt="Nogometni Klub Glavice" id='clubEmblem' />
                    <p id='clubName'>NK Glavice</p>
                </div>
            
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
