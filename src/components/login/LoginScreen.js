import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContex'
import { types } from '../../types/types'
import './style-login.css'


export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Juan David'
            }
        });
        history.replace(lastPath)
    }

    return (
        <div className="main-contetn">
            <h1>Login Screen</h1>
            <button onClick={handleLogin}> Login </button>
        </div>
    )
}
