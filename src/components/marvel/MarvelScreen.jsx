import React from 'react'
import { HeroList } from '../heroes/HeroList'
import '../../css/Twlight.css';


//Paso 1.18
const MarvelScreen = () => {
    return (
        <div >
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
                Protagonists
                <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'rgba(0, 136, 169, 0.8)',
                    transform: 'scaleX(0.7)',
                    transformOrigin: 'center'
                }}></span>
            </h1>
            <hr />

            <HeroList publisher="Protagonists" />

        </div>
    )
}

export default MarvelScreen
