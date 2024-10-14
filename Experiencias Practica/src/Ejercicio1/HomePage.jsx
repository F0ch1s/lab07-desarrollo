import React from 'react'

export const HomePage = () => {
  return (
    <>
        <div className='HomePage'>
            <div className='Content'>
                <h1>VetShop</h1>
                <h3>Bienvenido a nuestra página web.</h3>
            </div>
            <div className='Content'>
                <p>Disponemos de varios locales para atenderte en Arequipa.</p>
                <p>Inicia Sesion para acceder a nuestro catálogo online y más opciones.</p>
                <img src="/Image1.jpg" alt="VetShop"/>
            </div>
            <div className='Footer'>
                <p>Arequipa,Perú</p>
                <p>Correo: guilehm@gmail.com</p>
                <p>Telefonos:<br/>936553012<br/>933647552</p>
            </div>
        </div>
    </>
  )
}
