import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">            
            {/* Link za učlanjivanje */}
            <Link to="/signup" className='linkMember'>
                <div className="membership-section">
                    <div className="signup-link">
                        Učlani se
                    </div>
                </div>
            </Link>

            {/* Sekcija s vijestima */}
            <div className="news-section">
                <h2>Najnovije vijesti</h2>
                <ul>
                    <li>
                        <h3>Vijest 1</h3>
                        <p>dodati opis prve vijesti...</p>
                    </li>
                    <li>
                        <h3>Vijest 2</h3>
                        <p>dodati opis druge vijesti...</p>
                    </li>
                    <li>
                        <h3>Vijest 3</h3>
                        <p>dodati opis treće vijesti...</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
