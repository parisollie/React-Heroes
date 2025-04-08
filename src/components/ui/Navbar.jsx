//Bueno
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
        navigate('/login', { replace: true });
        dispatch({ type: types.logout });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark" style={{
            background: 'linear-gradient(135deg,rgb(17, 17, 19) 0%, #16213e 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.5rem 1rem'
        }}>
            <div className="container-fluid d-flex align-items-center w-100" style={{ display: 'flex' }}>

                {/* IZQUIERDA: LOGOS */}
                <div className="d-flex align-items-center justify-content-start" style={{ flex: '1', gap: '250px' }}>
                    <img src="/assets/lunas/logo1.png" alt="Logo1" style={{ height: '90px' }} />
                    <img src="/assets/lunas/logo2.png" alt="Logo2" style={{ height: '90px' }} />
                </div>

                {/* CENTRO: MENÚ */}
                <div className="d-flex justify-content-center" style={{ flex: '2' }}>
                    <div className="navbar-nav" style={{
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

                {/* DERECHA: LOGOS + USUARIO */}
                <div className="d-flex align-items-center justify-content-end" style={{ flex: '1', gap: '250px' }}>
                    <img src="/assets/lunas/logo3.png" alt="Logo3" style={{ height: '90px' }} />
                    <img src="/assets/lunas/logo4.png" alt="Logo4" style={{ height: '90px' }} />


                </div>

                <span className="nav-item nav-link text-white" style={{
                    background: 'rgba(0, 136, 169, 0.3)',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    {name}
                </span>

                <button className="nav-item nav-link btn"
                    onClick={() => {
                        navigate('/login', { replace: true });
                        dispatch({ type: types.logout });
                    }}
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
        </nav>



    )
}
