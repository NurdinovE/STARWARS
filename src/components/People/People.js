import React from 'react'

import './style.css'

function People({people}) {
    const peopleId = people.url.split('').slice(-3).slice(0,2).join('')
    const peopleAvatar = `https://starwars-visualguide.com/assets/img/characters${peopleId}.jpg`
    return (
        <div className="d-flex flex-column">
            <img src={peopleAvatar} className="people_img" alt=""/>
            <span className="people">Name: {people.name}</span>
            <span className="people">Height: {people.height}</span>
            <span className="people">Mass: {people.mass}</span>
            <span className="people">Hair color: {people.hair_color}</span>
            <span className="people">Skin color: {people.skin_color}</span>
            <span className="people">Eye color: {people.eye_color}</span>
            <span className="people">Birth year: {people.birth_year}</span>
            <span className="people">Gender: {people.gender}</span>
        </div>
    )
}
export default People