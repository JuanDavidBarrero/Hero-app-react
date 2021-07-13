import React from 'react'
import './style-login.css'


export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.replace('/')
    }

    return (
        <div className="main-contetn">
            <h1>Login Screen</h1>
            <button onClick={handleLogin}> Login </button>
        </div>
    )
}
