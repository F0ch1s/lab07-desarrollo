import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './Experiencia1/App';
import Component1 from './Experiencia2/AppExp2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
        <Component1/>
    </StrictMode>
);
