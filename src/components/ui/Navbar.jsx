import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

//paso 1.2
export const Navbar = () => {
    //paso 3.10,extraemos el user
    const { user: { name }, dispatch } = useContext(AuthContext);
    //Paso 3.14 Cambia useHistory → useNavigate
    const navigate = useNavigate();

    //Paso 3.13
    const handleLogout = () => {
        //Paso 3.15 Cambia history.replace → navigate con replace: true
        navigate('/login', { replace: true });

        dispatch({
            type: types.logout
        });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{
            //backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), url(/assets/twlight-navbar.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container-fluid">
                {/* Logo a la izquierda */}
                <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <img
                        src="/assets/twlight-navbar.png"
                        alt="Twlight"
                        style={{
                            height: '90px',
                            marginRight: '10px',
                            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'
                        }}
                    />

                </Link>

                {/* Menú centrado */}
                <div className="mx-auto order-0">
                    <div className="navbar-nav" style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '50px',
                        padding: '0 15px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
                            }
                            to="/protagonists"
                            style={{
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'rgba(0, 136, 169, 1)'}
                            onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
                        >
                            Protagonists
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
                            }
                            to="/antagonists"
                            style={{
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'rgba(169, 0, 0, 1)'}
                            onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
                        >
                            Villains
                        </NavLink>

                        {/**Paso 2.15 */}
                        <NavLink
                            className={({ isActive }) =>
                                `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
                            }
                            to="/search"
                            style={{
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'rgba(0, 169, 80, 1)'}
                            onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                {/* Usuario y botón logout a la derecha */}
                <div className="order-3">
                    <ul className="navbar-nav">
                        {/**Paso 3.7 */}
                        <span className="nav-item nav-link text-white" style={{
                            background: 'rgba(0, 136, 169, 0.3)',
                            borderRadius: '20px',
                            marginRight: '10px',
                            padding: '5px 15px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            {name}
                        </span>

                        {/**V-500,Paso 3.12 */}
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                            style={{
                                background: 'rgba(220, 53, 69, 0.3)',
                                color: 'rgba(255, 255, 255, 0.8)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(220, 53, 69, 0.5)';
                                e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(220, 53, 69, 0.3)';
                                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                            }}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// import React, { useContext } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

// //paso 1.2
// export const Navbar = () => {
//     //paso 3.10,extraemos el user
//     const { user: { name }, dispatch } = useContext(AuthContext);
//     //Paso 3.14 Cambia useHistory → useNavigate
//     const navigate = useNavigate();

//     //Paso 3.13
//     const handleLogout = () => {
//         //Paso 3.15 Cambia history.replace → navigate con replace: true
//         navigate('/login', { replace: true });

//         dispatch({
//             type: types.logout
//         });
//     };

//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

//             <Link
//                 className="navbar-brand"
//                 to="/"
//             >
//                 Twlight
//             </Link>

//             <div className="navbar-collapse">
//                 <div className="navbar-nav">

//                     <NavLink
//                         className={({ isActive }) =>
//                             `nav-item nav-link ${isActive ? 'active' : ''}`
//                         }
//                         to="/protagonists"
//                     >
//                         Protagonists
//                     </NavLink>

//                     <NavLink
//                         className={({ isActive }) =>
//                             `nav-item nav-link ${isActive ? 'active' : ''}`
//                         }
//                         to="/antagonists"
//                     >
//                         Villans
//                     </NavLink>
//                     {/**Paso 2.15 */}
//                     <NavLink
//                         className={({ isActive }) =>
//                             `nav-item nav-link ${isActive ? 'active' : ''}`
//                         }
//                         to="/search"
//                     >
//                         Search
//                     </NavLink>
//                 </div>
//             </div>

//             <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
//                 <ul className="navbar-nav ml-auto">

//                     {/**Paso 3.7 */}
//                     <span className="nav-item nav-link text-info">
//                         {name}
//                     </span>
//                     {/**V-500,Paso 3.12 */}
//                     <button
//                         className="nav-item nav-link btn"
//                         onClick={handleLogout}
//                     >
//                         Logout
//                     </button>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

