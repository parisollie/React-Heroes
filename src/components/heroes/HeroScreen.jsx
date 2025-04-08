import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

//paso 1.3
export const HeroScreen = () => {
  //Paso 1.23
  const { twId } = useParams();
  const navigate = useNavigate(); // Reemplaza el uso de history

  //Paso 1.24 y paso 2.4, ponemos el useMemo
  const tw = useMemo(() => getHeroById(twId), [twId]);

  //Paso 1.26, si el heroe no existe
  if (!tw) {
    return <Navigate to="/" replace />; // Cambia Redirect por Navigate
  }

  //Paso 2.1
  const handleReturn = () => {
    // Nueva implementación con useNavigate
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Equivalente a history.goBack()
    } else {
      navigate('/'); // Equivalente a history.push('/')
    }
  };

  //Paso 1.25
  const {
    id,
    name,
    publisher,
    affiliation,
    role,
    first_appearance,
    species,
    alias
  } = tw;

  return (
    //V-489,paso 2.0, una columna con espacio de 4
    <div className="row mt-5" style={{ minHeight: '70vh' }}>
      <div className="col-4">
        <img
          src={`../assets/twlight/${twId}.jpg`}
          alt={name}
          //Paso 2.7, ponemos animacion
          className="img-thumbnail animate__animated animate__fadeInLeft"
          style={{
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div
        className="col-8 animate__animated animate__fadeIn"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h3 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{name}</h3>

        <ul
          className="list-group list-group-flush"
          style={{
            background: 'transparent',
            marginBottom: '1.5rem'
          }}
        >
          <li
            className="list-group-item"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <b>Affiliation:</b> {affiliation}
          </li>
          <li
            className="list-group-item"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <b>Publisher:</b> {publisher}
          </li>
          <li
            className="list-group-item"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <b>First appearance:</b> {first_appearance}
          </li>
          <li
            className="list-group-item"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <b>Role:</b> {role}
          </li>
          <li
            className="list-group-item"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <b>Specie:</b> {species}
          </li>
        </ul>

        <h5 style={{ color: '#fff', marginTop: '1.5rem' }}>Alias</h5>
        <p style={{
          color: '#fff',
          fontStyle: 'italic',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: '0.5rem',
          borderRadius: '5px'
        }}>
          {alias}
        </p>

        <button
          //Paso 2.2, botón para regresar
          className="btn btn-outline-info"
          onClick={handleReturn}
          style={{
            marginTop: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 136, 169, 0.4)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
