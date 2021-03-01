import React from 'react'
import logo from '../images/icono.png';

export default function Menu() {
    return (
        <div>
          <nav className="navbar navbar-light bg-light bg-inverse navbar-toggleable-sm">
          
          <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="80" height="60" /> 2Show
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#identificador1" aria-controls="identificador1" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                
           
            </div>
            <div  className="collapse navbar-collapse" id="identificador1">
                <div className="navbar-nav">
                        <a className="nav-item nav-link"  href="/">Home</a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/eventos">Eventos</a>
                        <a className="nav-item nav-link" href="/ingresar" >Ingresar</a>
                        <a className="nav-item nav-link" href="/contacto" >Contacto</a>
                    </div>
            </div>
          </nav>
        </div>
    )
}




