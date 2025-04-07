import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

//V-486,paso 1.11
export const HeroList = ({ publisher }) => {
    //Paso 1.17
    const heroes = getHeroesByPublisher(publisher);
    //const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        //V-487,Paso 1.20
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    //Paso 1.22
                    <HeroCard
                        key={hero.id}
                        //Extrae cada una de las propiedades y son las que mandare
                        {...hero}
                    />
                ))
            }
        </div>

    )
}
