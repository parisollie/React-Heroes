import React from 'react'
import { HeroList } from '../heroes/HeroList'

//Paso 1.18
const MarvelScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher="Marvel Comics" />

        </div>
    )
}

export default MarvelScreen
