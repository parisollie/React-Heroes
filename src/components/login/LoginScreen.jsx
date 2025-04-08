import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

//Paso 1.4
export const LoginScreen = () => {

    //V-499,Paso 3.8
    const { dispatch } = useContext(AuthContext);

    //Paso 1.9
    const navigate = useNavigate();

    const handleLogin = () => {
        //Paso 3.22
        const lastPath = localStorage.getItem('lastPath') || '/';
        //Paso 3.9
        dispatch({
            type: types.login,
            payload: {
                name: 'Paullie'
            }
        });

        //navigate('/'); // Equivalente a history.push
        //paso 1.10,Ya no tenemos acceso a login
        navigate('/', { replace: true }); // Equivalente a history.replace

    }


    return (
        //V-485,paso 1.8
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>

        </div>
    )
}

export default LoginScreen