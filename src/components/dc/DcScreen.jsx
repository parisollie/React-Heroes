import React from 'react'
import { HeroList } from '../heroes/HeroList'

//V-483,paso 1.1
const DcScreen = () => {
    return (
        //Paso 1.19
        <div>
            <h1 style={{
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: '300',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '10px'
            }}>
                Villans
                <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'rgba(239, 52, 10, 0.8)',
                    transform: 'scaleX(0.7)',
                    transformOrigin: 'center'
                }}></span>
            </h1>
            <hr />

            <HeroList publisher="Antagonists" />

        </div>
    )
}

export default DcScreen