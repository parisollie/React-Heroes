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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    {/**Paso 2.15 */}
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    {/**Paso 3.7 */}
                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>
                    {/**V-500,Paso 3.12 */}
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

