import React from 'react'
import {auth, db} from '../firebase'
import { Menu, Row, Col, Input, Image, Button, Card } from "antd";
import {
  CameraOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons";
//importar iconos
import iconoEditar from "../../images/editar.png";
import iconoEditar2 from "../../images/editar.png";

export default function CrearEvento(props) {

    const [infoUser, setInfoUser] = React.useState('')


  
    return (
        <div>
            {props.firebaseUser.email}

            <div id="banner">
        <h1>
          {" "}
          {infoUser.nombre} {infoUser.apellido}
        </h1>

        <Image
          id="imagenPrincipal"
          src={infoUser.foto}
          width={250}
          height={250}
          preview={false}
        />
        <Image
          className="editFoto"
          src={iconoEditar}
          width={50}
          height={50}
          preview={false}
        />
        <Image
          className="editFotoB"
          src={iconoEditar2}
          width={50}
          height={50}
          preview={false}
        />
      </div>

      <Row>
          <Col>
          registrar evento
          </Col>
          <Col>
          ver evento
          </Col>


      </Row>




        </div>
    )
}
