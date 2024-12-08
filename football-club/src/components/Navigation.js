import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav id='navigationContent'>
            <ul id='navigationList'>
                <li><Link to="/">Naslovnica</Link></li>
                <li><Link to="/about">O Klubu</Link></li>
                <li><Link to="/team">Ekipa</Link></li>
                <li><Link to="/schedule">Raspored</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
