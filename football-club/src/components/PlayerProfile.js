import React from 'react';

function PlayerProfile({ name, position, number, image }) {
    return (
        <div className="player-profile">
            <img src={image} alt={`${name} photo`} />
            <h3>{name}</h3>
            <p>Pozicija: {position}</p>
            <p>Broj: {number}</p>
        </div>
    );
}

export default PlayerProfile;
