import React from "react";
import "../css/App.css";
import logo from "../images/icono.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Button, Image } from "antd";
import { auth } from "../components/firebase";
import { withRouter } from "react-router";

function Menu(props) {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/ingresar");
    });
  };

  return (
    <div>
      <Link className="navbar-brand logo" to="/">
        <Image
          src={logo}
          width={100}
          height={50}
          preview={false}
          className="imagen"
        />
      </Link>
      <Link to="/" className="btn btn-dark ">
        Home
      </Link>
      <Link to="/about" className="btn btn-dark">
        About
      </Link>
      <NavLink to="/eventos" className="btn btn-dark" activeClassName="active">
        Eventos
      </NavLink>
      {props.firebaseUser !== null ? (
        <Link to="/myprofile" className="btn btn-dark" activeClassName="active">
          Mi perfil
        </Link>
      ) : null}
      {props.firebaseUser !== null ? (
        <button className="btn btn-dark" onClick={() => cerrarSesion()}>
          Log Out
        </button>
      ) : (
        <Link to="/ingresar" className="btn btn-dark">
          Ingresar
        </Link>
      )}
    </div>
  );
}

export default withRouter(Menu);
