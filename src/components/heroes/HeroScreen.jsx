import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

//paso 1.3
export const HeroScreen = () => {
  //Paso 1.23
  const { heroeId } = useParams();
  const navigate = useNavigate(); // Reemplaza el uso de history

  //Paso 1.24 y paso 2.4, ponemos el useMemo
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  //Paso 1.26, si el heroe no existe
  if (!hero) {
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
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    //V-489,paso 2.0, una columna con espacio de 4
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          //Paso 2.7, ponemos animacion
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button
          //Paso 2.2, botón para regresar
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;