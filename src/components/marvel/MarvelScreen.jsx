import React from 'react'
import { HeroList } from '../heroes/HeroList'

//Paso 1.18
const MarvelScreen = () => {
    return (
        <div>
            <h1>Protagonists</h1>
            <hr />

            <HeroList publisher="Protagonists" />

        </div>
    )
}

export default MarvelScreen
