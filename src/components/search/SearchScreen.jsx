import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

//V-492,Paso 2.8
export const SearchScreen = () => {

    const navigate = useNavigate(); // Reemplaza history
    //Paso 4.24
    const location = useLocation();
    //Paso 4.25
    const { q = '' } = queryString.parse(location.search);
    //Paso 2.10
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    //Paso 2.17
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    //Paso 2.19
    const { searchText } = formValues;

    //Paso 2.12
    const handleSearch = (e) => {
        //Paso 2.20
        e.preventDefault();
        //V-493,paso 4.23
        navigate(`?q=${searchText}`); // Usa navigate en lugar de history.push
    }

    return (
        //Paso 2.9
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Search Screen</h1>
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

            <div className="row">
                {/* Móvil: col-12 | Tablet y PC: col-md-5 */}
                <div className="col-12 col-md-5 mb-4 mb-md-0">
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                        height: '100%'
                    }}>
                        <h4 style={{ color: '#fff' }}> Search Form </h4>
                        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                        {/**Paso 2.14 */}
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Find your character"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                //Paso 2.18
                                value={searchText}
                                onChange={handleInputChange}
                                style={{
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#fff',
                                    marginBottom: '10px'
                                }}
                            />

                            <button
                                type="submit"
                                className="btn m-1 btn-block"
                                style={{
                                    background: 'rgba(0, 136, 169, 0.4)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    color: '#fff',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(0, 136, 169, 0.6)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(0, 136, 169, 0.4)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                Search...
                            </button>
                        </form>
                    </div>
                </div>

                {/* Móvil: col-12 | Tablet y PC: col-md-7 */}
                <div className="col-12 col-md-7">
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                        minHeight: '100%'
                    }}>
                        <h4 style={{ color: '#fff' }}> Results </h4>
                        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                        {
                            //Si el query es un string vacio,significa que no buscamos nada
                            (q === '')
                            &&
                            <div className="alert" style={{
                                background: 'rgba(0, 123, 255, 0.2)',
                                border: '1px solid rgba(0, 123, 255, 0.3)',
                                color: '#fff'
                            }}>
                                Search a character
                            </div>
                        }

                        {
                            (q !== '' && heroesFiltered.length === 0)
                            &&
                            <div className="alert" style={{
                                background: 'rgba(220, 53, 69, 0.2)',
                                border: '1px solid rgba(220, 53, 69, 0.3)',
                                color: '#fff'
                            }}>
                                There is no a character with {q}
                            </div>
                        }

                        <div style={{ overflowY: 'auto', maxHeight: '70vh', paddingRight: '10px' }}>
                            {
                                //Paso 2.11
                                heroesFiltered.map(tw => (
                                    <HeroCard
                                        key={tw.id}
                                        {...tw}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//------
// import React, { useMemo } from 'react';
// import queryString from 'query-string';
// import { HeroCard } from '../heroes/HeroCard';
// import { useForm } from '../../hooks/useForm';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getHeroesByName } from '../../selectors/getHeroesByName';

// export const SearchScreen = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { q = '' } = queryString.parse(location.search);
//     const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
//     const [formValues, handleInputChange] = useForm({
//         searchText: q
//     });
//     const { searchText } = formValues;

//     const handleSearch = (e) => {
//         e.preventDefault();
//         navigate(`?q=${searchText}`);
//     }

//     return (
//         <div style={{ padding: '15px' }}>
//             <h1 style={{
//                 color: '#fff',
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//                 fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' // Tamaño responsive
//             }}>
//                 Search Screen
//             </h1>
//             <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//             <div className="row">
//                 {/* Columna izquierda - Formulario */}
//                 <div className="col-12 col-md-5 mb-4 mb-md-0"> {/* Added mb-4 for mobile spacing */}
//                     <div style={{
//                         background: 'rgba(255, 255, 255, 0.1)',
//                         backdropFilter: 'blur(10px)',
//                         borderRadius: '15px',
//                         padding: '20px',
//                         border: '1px solid rgba(255, 255, 255, 0.2)',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//                         height: '100%'
//                     }}>
//                         <h4 style={{ color: '#fff', fontSize: '1.2rem' }}> Search Form </h4>
//                         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//                         <form onSubmit={handleSearch}>
//                             <input
//                                 type="text"
//                                 placeholder="Find your character"
//                                 className="form-control"
//                                 name="searchText"
//                                 autoComplete="off"
//                                 value={searchText}
//                                 onChange={handleInputChange}
//                                 style={{
//                                     background: 'rgba(0, 0, 0, 0.3)',
//                                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                                     color: '#fff',
//                                     marginBottom: '10px',
//                                     fontSize: '0.9rem'
//                                 }}
//                             />

//                             <button
//                                 type="submit"
//                                 className="btn m-1 btn-block"
//                                 style={{
//                                     background: 'rgba(0, 136, 169, 0.4)',
//                                     border: '1px solid rgba(255, 255, 255, 0.4)',
//                                     color: '#fff',
//                                     transition: 'all 0.3s ease',
//                                     width: '100%',
//                                     padding: '8px'
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.background = 'rgba(0, 136, 169, 0.6)';
//                                     e.target.style.transform = 'translateY(-2px)';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.background = 'rgba(0, 136, 169, 0.4)';
//                                     e.target.style.transform = 'translateY(0)';
//                                 }}
//                             >
//                                 Search...
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Columna derecha - Resultados */}
//                 <div className="col-12 col-md-7">
//                     <div style={{
//                         background: 'rgba(255, 255, 255, 0.1)',
//                         backdropFilter: 'blur(10px)',
//                         borderRadius: '15px',
//                         padding: '25px',
//                         border: '1px solid rgba(255, 255, 255, 0.2)',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//                         minHeight: '100%',
//                         fontSize: '1rem'
//                     }}>
//                         <h4 style={{ color: '#fff', fontSize: '1.4rem' }}> Results </h4>
//                         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//                         {
//                             (q === '')
//                             &&
//                             <div className="alert" style={{
//                                 background: 'rgba(0, 123, 255, 0.2)',
//                                 border: '1px solid rgba(0, 123, 255, 0.3)',
//                                 color: '#fff',
//                                 fontSize: '1rem'
//                             }}>
//                                 Search a character
//                             </div>
//                         }

//                         {
//                             (q !== '' && heroesFiltered.length === 0)
//                             &&
//                             <div className="alert" style={{
//                                 background: 'rgba(220, 53, 69, 0.2)',
//                                 border: '1px solid rgba(220, 53, 69, 0.3)',
//                                 color: '#fff',
//                                 fontSize: '1rem'
//                             }}>
//                                 There is no a character with {q}
//                             </div>
//                         }

//                         <div style={{
//                             overflowY: 'auto',
//                             maxHeight: '70vh',
//                             paddingRight: '10px',
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//                             gap: '20px'
//                         }}>
//                             {
//                                 heroesFiltered.map(tw => (
//                                     <HeroCard
//                                         key={tw.id}
//                                         {...tw}
//                                         style={{
//                                             width: '100%',
//                                             transform: 'scale(0.95)',
//                                             transition: 'transform 0.3s ease'
//                                         }}
//                                     />
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


//Original

// import React, { useMemo } from 'react';
// import queryString from 'query-string';
// import { HeroCard } from '../heroes/HeroCard';
// import { useForm } from '../../hooks/useForm';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getHeroesByName } from '../../selectors/getHeroesByName';

// //V-492,Paso 2.8
// export const SearchScreen = () => {

//     const navigate = useNavigate(); // Reemplaza history
//     //Paso 4.24
//     const location = useLocation();
//     //Paso 4.25
//     const { q = '' } = queryString.parse(location.search);
//     //Paso 2.10
//     const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
//     //Paso 2.17
//     const [formValues, handleInputChange] = useForm({
//         searchText: q
//     });
//     //Paso 2.19
//     const { searchText } = formValues;

//     //Paso 2.12
//     const handleSearch = (e) => {
//         //Paso 2.20
//         e.preventDefault();
//         //V-493,paso 4.23
//         navigate(`?q=${searchText}`); // Usa navigate en lugar de history.push
//     }

//     return (
//         //Paso 2.9
//         <div style={{ padding: '20px' }}>
//             <h1 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Search Screen</h1>
//             <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//             <div className="row">

//                 <div className="col-5">
//                     <div style={{
//                         background: 'rgba(255, 255, 255, 0.1)',
//                         backdropFilter: 'blur(10px)',
//                         borderRadius: '15px',
//                         padding: '20px',
//                         border: '1px solid rgba(255, 255, 255, 0.2)',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
//                     }}>
//                         <h4 style={{ color: '#fff' }}> Search Form </h4>
//                         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//                         {/**Paso 2.14 */}
//                         <form onSubmit={handleSearch}>
//                             <input
//                                 type="text"
//                                 placeholder="Find your character"
//                                 className="form-control"
//                                 name="searchText"
//                                 autoComplete="off"
//                                 //Paso 2.18
//                                 value={searchText}
//                                 onChange={handleInputChange}
//                                 style={{
//                                     background: 'rgba(0, 0, 0, 0.3)',
//                                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                                     color: '#fff',
//                                     marginBottom: '10px'
//                                 }}
//                             />

//                             <button
//                                 type="submit"
//                                 className="btn m-1 btn-block"
//                                 style={{
//                                     background: 'rgba(0, 136, 169, 0.4)',
//                                     border: '1px solid rgba(255, 255, 255, 0.4)',
//                                     color: '#fff',
//                                     transition: 'all 0.3s ease'
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.background = 'rgba(0, 136, 169, 0.6)';
//                                     e.target.style.transform = 'translateY(-2px)';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.background = 'rgba(0, 136, 169, 0.4)';
//                                     e.target.style.transform = 'translateY(0)';
//                                 }}
//                             >
//                                 Search...
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/**Paso 4.27 */}
//                 <div className="col-7">
//                     <div style={{
//                         background: 'rgba(255, 255, 255, 0.1)',
//                         backdropFilter: 'blur(10px)',
//                         borderRadius: '15px',
//                         padding: '20px',
//                         border: '1px solid rgba(255, 255, 255, 0.2)',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
//                         minHeight: '100%'
//                     }}>
//                         <h4 style={{ color: '#fff' }}> Results </h4>
//                         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

//                         {
//                             //Si el query es un string vacio,significa que no buscamos nada
//                             (q === '')
//                             &&
//                             <div className="alert" style={{
//                                 background: 'rgba(0, 123, 255, 0.2)',
//                                 border: '1px solid rgba(0, 123, 255, 0.3)',
//                                 color: '#fff'
//                             }}>
//                                 Search a character
//                             </div>
//                         }

//                         {
//                             (q !== '' && heroesFiltered.length === 0)
//                             &&
//                             <div className="alert" style={{
//                                 background: 'rgba(220, 53, 69, 0.2)',
//                                 border: '1px solid rgba(220, 53, 69, 0.3)',
//                                 color: '#fff'
//                             }}>
//                                 There is no a character with {q}
//                             </div>
//                         }

//                         <div style={{ overflowY: 'auto', maxHeight: '70vh', paddingRight: '10px' }}>
//                             {
//                                 //Paso 2.11
//                                 heroesFiltered.map(tw => (
//                                     <HeroCard
//                                         key={tw.id}
//                                         {...tw}
//                                     />
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }