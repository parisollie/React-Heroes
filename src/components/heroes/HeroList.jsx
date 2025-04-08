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
        <div className="card-columns animate__animated animate__fadeIn"
            style={{
                // maxWidth: 540,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
            }}

        >
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
