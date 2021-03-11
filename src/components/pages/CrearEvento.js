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



    React.useEffect(() => {
        if (auth.currentUser) {
          console.log("Existe un usuario");
         
          const obtenerDatos = async () => {
            try {
              const data = await db.collection("infoUser").get(); //poner doc(user.email) escoje directo, usar solo usuario, usar ingles PONER
              //const data = await db.collection("infoUser").doc(user.email).get();
              const arrayDatos = await data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
             
    
              const filtrado = arrayDatos.filter((dato) => dato.uid === props.firebaseUser.uid);
              console.log(filtrado)
              setInfoUser(filtrado[0]);
              
            } catch (error) {
              console.log(error);
            }
          };
          obtenerDatos();
        } else {
          console.log("no existe un usuario");
          //redirigir al usuario al login
          props.history.push("/ingresar");
        }
      }, []);








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
