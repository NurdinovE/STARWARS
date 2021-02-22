import React from 'react'

import './style.css'

function Planet({planet}) {
    const planetId = planet.url.split('').slice(-3).slice(0,2).join('')
    const planetAvatar = `https://starwars-visualguide.com/assets/img/planets${planetId}.jpg`
    const planetError = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`

    return (
        <div className="d-flex flex-column">
            <img className="card__img" src={planetAvatar} onError={(event => {event.target.onerror = null;event.target.src = planetError})} alt=""/>
            <span className="planet">Name: {planet.name}</span>
            <span className="planet">Rotation period: {planet.rotation_period}</span>
            <span className="planet">Orbital period: {planet.orbital_period}</span>
            <span className="planet">Climate: {planet.climate}</span>
            <span className="planet">Gravity: {planet.gravity}</span>
            <span className="planet">Terrain: {planet.terrain}</span>
            <span className="planet">Surface water: {planet.surface_water}</span>
        </div>
    )
}

export default Planet
