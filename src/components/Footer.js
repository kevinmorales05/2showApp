import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
//inserto las páginas del proyecto
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Eventos from "./pages/Eventos";
import Ingresar from "./pages/Ingresar";
import SingUp from "./pages/SingUp";
import About from "./pages/About";

export default function Footer() {
  return (
    <div>
      <Router>
        <div className="container mt-3">
          <div className="btn-group mt-4">
            <Link to="/" className="btn btn-dark ">
              Home
            </Link>
            <Link to="/about" className="btn btn-dark">
              About
            </Link>
            <NavLink
              to="/eventos"
              className="btn btn-dark"
              activeClassName="active"
            >
              Eventos
            </NavLink>
            <Link to="/ingresar" className="btn btn-dark">
              Ingresar
            </Link>
            <Link to="/contacto" className="btn btn-dark">
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

            <Router path="/" exact>
              <Inicio />
            </Router>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
