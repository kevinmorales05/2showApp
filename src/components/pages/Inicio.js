import React from "react";
import { Button, Row, Col, Image } from "antd";
import "../../css/Inicio.css";
import Footer from '../Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink,
    Link
  } from "react-router-dom";
  import Menu from '../Menu';

export default function Inicio() {
  return (
    <div>
      <div className="fondo">
        <div id="content">
          <p>Tu talento, en vivo</p>
          <h2>La Aplicacion de Shows en Vivo</h2>
          
          <Button type="primary" href="/eventos" className="btn btn-dark">Ver Eventos</Button>
        </div>
      </div>
      <h3>Lo que 2Show tiene para ti</h3>
      <Row justify="center" wrap="true" className="propaganda">
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <Image
            src="https://picsum.photos/200/300"
            width={200}
            height={300}
            preview={false}
            className="imagen"
          />
          <h2>Shows en Vivo</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <Image
          className="imagen"
            src="https://picsum.photos/200/300"
            width={200}
            height={300}
            preview={false}
          />
          <h2>Conoce a tus artistas preferidos</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          <Image
          className="imagen"
            src="https://picsum.photos/200/300"
            width={200}
            height={300}
            preview={false}
          />
          <h2>Compra y regala entradas</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Col>
      </Row>
      <Row className="bloqueVideo">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2>¿Cómo funciona 2Show para artistas?</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.

            </p>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lDK9QqIzhwk" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </Col>
      </Row>
      <Row className="bloqueVideo">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2>¿Cómo funciona 2Show para el público en general?</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.

            </p>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lDK9QqIzhwk" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </Col>
      </Row>
      
      

    </div>
  );
}
