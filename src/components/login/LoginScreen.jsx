import React from 'react'
import { useNavigate } from 'react-router-dom';
//Paso 1.4
export const LoginScreen = () => {

    //Paso 1.9
    const navigate = useNavigate();

    const handleLogin = () => {
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