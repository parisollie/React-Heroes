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
            <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                background: 'rgba(12, 12, 12, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(3, 3, 3, 0.2)'
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    //textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    marginBottom: '30px',
                    background: 'linear-gradient(90deg, rgba(247, 247, 248, 0.4) 0%, rgba(0,169,157,0.4) 100%)',
                    WebkitBackgroundClip: 'text',
                    //WebkitTextFillColor: 'transparent',
                    padding: '0 20px'
                }}>
                    Twlight
                </h1>

                <hr style={{
                    border: 'none',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0,136,169,0.8) 50%, transparent 100%)',
                    margin: '20px auto',
                    width: '70%'
                }} />

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            marginBottom: '20px',
                            padding: '12px',
                            borderRadius: '8px'
                        }}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            padding: '12px',
                            borderRadius: '8px'
                        }}
                    />
                </div>

                <button
                    className="btn btn-block"
                    onClick={handleLogin}
                    style={{
                        background: 'rgba(0, 136, 169, 0.4)',
                        color: '#fff',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '8px',
                        padding: '12px',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        marginTop: '20px'
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
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginScreen