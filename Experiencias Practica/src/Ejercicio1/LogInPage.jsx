import React, { useState, useContext } from 'react';
import { LoginContext } from './App1'; // Importar el contexto

export const LogInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(LoginContext); // Extraer la función login del contexto

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password); // Llamar a la función login del contexto
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Username:</p>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <p>Password:</p>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
