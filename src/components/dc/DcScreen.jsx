import React from 'react'
import { HeroList } from '../heroes/HeroList'

//V-483,paso 1.1
const DcScreen = () => {
    return (
        //Paso 1.19
        <div>
            <h1>Villans</h1>
            <hr />

            <HeroList publisher="Antagonists" />

        </div>
    )
}

export default DcScreen