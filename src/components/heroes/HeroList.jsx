import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

//V-486,paso 1.11
export const HeroList = ({ publisher }) => {
    //Paso 1.17
    //const heroes = getHeroesByPublisher(publisher);
    //Paso 2.3, usamos UseMemo, se dispara si el publisher cambia
    const twilightCharacters = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        //V-487,Paso 1.20
        <div className="card-columns animate__animated animate__fadeIn">
            {
                twilightCharacters.map(tw => (
                    //Paso 1.22
                    <HeroCard
                        key={tw.id}
                        //Extrae cada una de las propiedades y son las que mandare
                        {...tw}
                    />
                ))
            }
        </div>

    )
}
