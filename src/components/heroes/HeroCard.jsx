import React from 'react';
import { Link } from 'react-router-dom';

//Paso 1.21
export const HeroCard = ({
    id,
    name,
    publisher,
    affiliation,
    role,
    first_appearance,
    species,
    alias

}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/twlight/${id}.jpg`} className="card-img" alt={name} />
                </div>
                <div className="col-md-8">

                    <div className="card-body">
                        <h5 className="card-title"> {name} </h5>
                        <p className="card-text"> {affiliation} </p>

                        {
                            //Si alter ego es diferente renderizalo
                            (affiliation !== alias)
                            && <p className="card-text"> {alias} </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p>

                        <Link to={`/tw/${id}`}>
                            More...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
