import React from 'react'
import { HeroList } from '../heroes/HeroList'

//V-483,paso 1.1
const DcScreen = () => {
    return (
        //Paso 1.19
        <div>
            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}

export default DcScreen