import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroByID } from '../../selector/getHerosByID';

export const HeroScreen = ({history}) => {

    const { heroeID } = useParams();

    const hero = getHeroByID(heroeID)

    if (!hero) {
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () =>{

        if(history.length <= 2 ){
            history.push('/');
        }
        history.goBack();
    }

    return (
        <div className="hero-info-row">

            <img src={`../assets/${heroeID}.jpg`} alt={superhero} className="animate__animated animate__fadeInLeft" />

            <div className="col-hero-info animate__animated animate__fadeInDown ">
                <h3>{superhero}</h3>

                <ul>
                    <li> <b>Alter eso: </b> {alter_ego}</li>
                    <li> <b>Publisher: </b> {publisher}</li>
                    <li> <b>First appearance: </b> {first_appearance}</li>
                    <li> <b>Characters: </b> {characters}</li>
                </ul>

                <button  onClick={handleReturn}> Return </button>

            </div>

        </div>
    )
}
