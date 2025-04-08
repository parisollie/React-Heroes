import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="card ms-3 animate__animated animate__fadeIn" style={{
            maxWidth: 540,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'

        }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={`./assets/twlight/${id}.jpg`}
                        className="card-img"
                        alt={name}
                        style={{
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.9)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={{ color: '#fff', padding: '1.5rem' }}>
                        <h5 className="card-title" style={{
                            fontSize: '1.4rem',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            marginBottom: '1rem'
                        }}>
                            {name}
                        </h5>

                        <p className="card-text" style={{
                            background: 'rgba(208, 196, 30, 0.3)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            display: 'inline-block',
                            marginBottom: '0.8rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                            {affiliation}
                        </p>

                        {(affiliation !== alias) && (
                            <p className="card-text" style={{
                                fontStyle: 'italic',
                                background: 'rgba(0, 0, 0, 0.6)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                marginBottom: '1rem'
                            }}>
                                "{alias}"
                            </p>
                        )}

                        <p className="card-text" style={{ marginBottom: '1.5rem' }}>
                            <small style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontStyle: 'italic'
                            }}>
                                {first_appearance}
                            </small>
                        </p>

                        <Link
                            to={`/tw/${id}`}
                            className="btn btn-sm d-block"
                            style={{
                                background: 'rgba(0, 136, 169, 0.4)',
                                color: '#fff',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                borderRadius: '6px',
                                padding: '0.5rem 1rem',
                                transition: 'all 0.3s ease',
                                textAlign: 'center',
                                textDecoration: 'none',
                                width: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(0, 136, 169, 0.6)';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(0, 136, 169, 0.4)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
