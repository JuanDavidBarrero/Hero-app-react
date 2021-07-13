import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {


    return (
        <div className="card">
            <img src={`./assets/${id}.jpg`} alt={superhero} />
            <div className="card-body">
                <h5>{superhero}</h5>
                <p>{alter_ego}</p>
                {
                    (alter_ego !== characters) && <p>{characters}</p>
                }
                <small>{first_appearance}</small>
                <p>{publisher}</p> 
                <Link to={`./hero/${id}`} >Mas..</Link>
            </div>
        </div>
    )

}