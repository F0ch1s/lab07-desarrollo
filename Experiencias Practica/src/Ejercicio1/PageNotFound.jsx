import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <>
        <div className='PageNotFound'>
            <h1>ERROR DE ACCESO</h1>
            <p>No puedes acceder a esta página, inicia sesión primero.</p>
            <Link to='/login'>Iniciar Sesion</Link>
        </div>
    </>
  )
}
