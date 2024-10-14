import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
/*import './App.css'*/
import './App2.css';
import App from './Experiencia1/App';
import Component1 from './Experiencia2/AppExp2'
import App1 from './Ejercicio1/App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/*
        <App/>
        <Component1/>
        */}
        <App1/>
    </StrictMode>
);
