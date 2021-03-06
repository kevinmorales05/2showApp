import './css/App.css';
import React from "react";
//importo auth
import {auth} from './components/firebase'
//importo componentes para la navegacion
import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink,
  Link
} from "react-router-dom";
//inserto las páginas del proyecto
import Contacto from './components/pages/Contacto';
import Inicio from './components/pages/Inicio';
import Eventos from './components/pages/Eventos';
import Ingresar from './components/pages/Ingresar';
import SingUp from './components/pages/SingUp';
import About from './components/pages/About';
import OthersProfile from './components/pages/OthersProfile';
import MyProfile from './components/pages/MyProfile';
import logo from './images/logo2ShowOriginalBlanco.png';

import {Image} from 'antd';
import MainAdmin from './components/pages/PanelAdministracion/MainAdmin';


function App() {
  //usuario de la consola
  const [firebaseUser, setFirebaseUser] = React.useState(false)
//esta es una espera hasta que cargue el usuario
  React.useEffect(()=> {
    auth.onAuthStateChanged(user =>{
      //con esto puede conocer al usuario que esta en la sesion presente
      console.log(user)
      if(user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  })
  return firebaseUser ? (
    <Router>
      <div className="container mt-3 ">
        <div className="btn-group mt-4 menu">
          <Link className="navbar-brand logo" to='/'>
            <Image src={logo} 
            width={100}
            height={50}
            preview={false}
            className="imagen"
            />
            </Link>
          <Link to="/" className="btn btn-dark ">
            Home
          </Link>
          <Link to='/about' className="btn btn-dark">
            About
          </Link>
          <NavLink to='/eventos' className="btn btn-dark" activeClassName="active">
            Eventos
          </NavLink>
          <Link to='/ingresar' className="btn btn-dark">
            Ingresar
          </Link>
          <Link to='/myprofile' className="btn btn-dark" activeClassName="active">
            Mi perfil
          </Link>
          <Link to='/contacto' className="btn btn-dark">
            Contacto
          </Link>
        </div>
       
        <hr />
        <Switch>
          <Router path="/contacto">
            <Contacto />
          </Router>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/eventos">
            <Eventos />
          </Router>
          <Router path="/ingresar">
            <Ingresar />
          </Router>
          <Router path="/myprofile">
            <MyProfile />
          </Router>
          <Router path="/others">
            <OthersProfile />
          </Router>
          <Router path="/" exact>
            <Inicio />
          </Router>
        </Switch>
      </div>
    </Router>
  ) : (
    <div>
      <p>Cargando...</p>
    </div>
  );
}
//el operador ternario va para lanzar cargando mientras se va cargando el usuario presente
export default App;
