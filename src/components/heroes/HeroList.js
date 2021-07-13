import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selector/getHerosByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])


    return (
        <ul className="cards animate__animated animate__fadeIn">
            {
                heroes.map(hero => {
                    return <HeroCard key={hero.id}{...hero} />
                })
            }
        </ul>
    )
}
