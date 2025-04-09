import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const { user: { name }, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true });
        dispatch({ type: types.logout });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{
            background: 'linear-gradient(135deg,rgb(17, 17, 19) 0%, #16213e 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.5rem 1rem'
        }}>
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center w-100">

                {/* PRIMERA FILA: CONTENIDO COMPLETO */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
                    {/* IZQUIERDA: LOGOS 1 y 2 */}
                    <div className="d-flex align-items-center order-md-1" style={{ gap: '20px' }}>
                        <img
                            src="/assets/lunas/logo1.png"
                            alt="Logo1"
                            style={{
                                height: '60px',
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                            }}
                        />
                        <img
                            src="/assets/lunas/logo2.png"
                            alt="Logo2"
                            style={{
                                height: '60px',
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                            }}
                        />
                    </div>

                    {/* CENTRO: MENÚ (se mantiene en medio en desktop) */}
                    <div className="order-md-2 my-2 my-md-0">
                        <div className="navbar-nav">
                            <div style={{
                                background: 'rgba(0, 136, 169, 0.4)',
                                borderRadius: '50px',
                                padding: '0 15px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px'
                            }}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
                                    }
                                    to="/protagonists"
                                    style={{ fontWeight: '500' }}
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
                                    style={{ fontWeight: '500' }}
                                    onMouseEnter={(e) => e.target.style.color = 'rgba(169, 0, 0, 1)'}
                                    onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
                                >
                                    Villains
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
                                    }
                                    to="/search"
                                    style={{ fontWeight: '500' }}
                                    onMouseEnter={(e) => e.target.style.color = 'rgba(0, 169, 80, 1)'}
                                    onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
                                >
                                    Search
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* DERECHA: LOGOS 3 y 4 + USUARIO */}
                    <div className="d-flex align-items-center order-md-3" style={{ gap: '20px' }}>
                        <img
                            src="/assets/lunas/logo3.png"
                            alt="Logo3"
                            style={{
                                height: '60px',
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                            }}
                        />
                        <img
                            src="/assets/lunas/logo4.png"
                            alt="Logo4"
                            style={{
                                height: '60px',
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                            }}
                        />

                        {/* USUARIO Y LOGOUT */}
                        <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                            <span className="nav-item nav-link text-white" style={{
                                background: 'rgba(0, 136, 169, 0.3)',
                                borderRadius: '20px',
                                padding: '5px 15px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                {name}
                            </span>

                            <button className="nav-item nav-link btn"
                                onClick={handleLogout}
                                style={{
                                    background: 'rgba(220, 53, 69, 0.3)',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(220, 53, 69, 0.4)',
                                    transition: 'all 0.3s ease',
                                    padding: '5px 15px'
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
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
//-- ori

// import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

// export const Navbar = () => {
//     const { user: { name }, dispatch } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         navigate('/login', { replace: true });
//         dispatch({ type: types.logout });
//     };

//     return (
//         <nav className="navbar navbar-expand-md navbar-dark" style={{
//             background: 'linear-gradient(135deg,rgb(17, 17, 19) 0%, #16213e 100%)',
//             borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//             padding: '0.5rem 1rem'
//         }}>
//             <div className="container-fluid d-flex flex-column flex-md-row align-items-center w-100">

//                 {/* PRIMERA FILA: CONTENIDO COMPLETO */}
//                 <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
//                     {/* IZQUIERDA: LOGOS 1 y 2 */}
//                     <div className="d-flex align-items-center order-md-1" style={{ gap: '20px' }}>
//                         <img
//                             src="/assets/lunas/logo1.png"
//                             alt="Logo1"
//                             style={{
//                                 height: '60px',
//                                 filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
//                                 transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                                 transform: 'scale(1)'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.target.style.transform = 'scale(1.1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.target.style.transform = 'scale(1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
//                             }}
//                         />
//                         <img
//                             src="/assets/lunas/logo2.png"
//                             alt="Logo2"
//                             style={{
//                                 height: '60px',
//                                 filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
//                                 transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                                 transform: 'scale(1)'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.target.style.transform = 'scale(1.1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.target.style.transform = 'scale(1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
//                             }}
//                         />
//                     </div>

//                     {/* CENTRO: MENÚ (se mantiene en medio en desktop) */}
//                     <div className="order-md-2 my-2 my-md-0">
//                         <div className="navbar-nav">
//                             <div style={{
//                                 background: 'rgba(0, 136, 169, 0.4)',
//                                 borderRadius: '50px',
//                                 padding: '0 15px',
//                                 backdropFilter: 'blur(10px)',
//                                 border: '1px solid rgba(255, 255, 255, 0.1)',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 gap: '10px'
//                             }}>
//                                 <NavLink
//                                     className={({ isActive }) =>
//                                         `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
//                                     }
//                                     to="/protagonists"
//                                     style={{ fontWeight: '500' }}
//                                     onMouseEnter={(e) => e.target.style.color = 'rgba(0, 136, 169, 1)'}
//                                     onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
//                                 >
//                                     Protagonists
//                                 </NavLink>
//                                 <NavLink
//                                     className={({ isActive }) =>
//                                         `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
//                                     }
//                                     to="/antagonists"
//                                     style={{ fontWeight: '500' }}
//                                     onMouseEnter={(e) => e.target.style.color = 'rgba(169, 0, 0, 1)'}
//                                     onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
//                                 >
//                                     Villains
//                                 </NavLink>
//                                 <NavLink
//                                     className={({ isActive }) =>
//                                         `nav-item nav-link mx-2 ${isActive ? 'active' : ''}`
//                                     }
//                                     to="/search"
//                                     style={{ fontWeight: '500' }}
//                                     onMouseEnter={(e) => e.target.style.color = 'rgba(0, 169, 80, 1)'}
//                                     onMouseLeave={(e) => e.target.style.color = e.target.className.includes('active') ? '#fff' : 'rgba(255, 255, 255, 0.7)'}
//                                 >
//                                     Search
//                                 </NavLink>
//                             </div>
//                         </div>
//                     </div>

//                     {/* DERECHA: LOGOS 3 y 4 + USUARIO */}
//                     <div className="d-flex align-items-center order-md-3" style={{ gap: '20px' }}>
//                         <img
//                             src="/assets/lunas/logo3.png"
//                             alt="Logo3"
//                             style={{
//                                 height: '60px',
//                                 filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
//                                 transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                                 transform: 'scale(1)'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.target.style.transform = 'scale(1.1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.target.style.transform = 'scale(1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
//                             }}
//                         />
//                         <img
//                             src="/assets/lunas/logo4.png"
//                             alt="Logo4"
//                             style={{
//                                 height: '60px',
//                                 filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
//                                 transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                                 transform: 'scale(1)'
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.target.style.transform = 'scale(1.1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.target.style.transform = 'scale(1)';
//                                 e.target.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
//                             }}
//                         />

//                         {/* USUARIO Y LOGOUT */}
//                         <div className="d-flex align-items-center" style={{ gap: '10px' }}>
//                             <span className="nav-item nav-link text-white" style={{
//                                 background: 'rgba(0, 136, 169, 0.3)',
//                                 borderRadius: '20px',
//                                 padding: '5px 15px',
//                                 border: '1px solid rgba(255, 255, 255, 0.1)'
//                             }}>
//                                 {name}
//                             </span>

//                             <button className="nav-item nav-link btn"
//                                 onClick={handleLogout}
//                                 style={{
//                                     background: 'rgba(220, 53, 69, 0.3)',
//                                     color: 'rgba(255, 255, 255, 0.8)',
//                                     borderRadius: '20px',
//                                     border: '1px solid rgba(220, 53, 69, 0.4)',
//                                     transition: 'all 0.3s ease',
//                                     padding: '5px 15px'
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.background = 'rgba(220, 53, 69, 0.5)';
//                                     e.target.style.color = '#fff';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.background = 'rgba(220, 53, 69, 0.3)';
//                                     e.target.style.color = 'rgba(255, 255, 255, 0.8)';
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }