import React, { useState } from "react";
import { auth, db } from "../firebase";
import { withRouter } from "react-router";
import "../../css/myProfile.css";
//importo Ant para poder usar sus componentes
import { Menu, Row, Col, Input, Image, Button, Card } from "antd";

const person = {
  name: "Leonel",
  lastName: "Morales",
};

function MyProfile(props) {
  //state del usuario vigente, el autenticado
  const [user, setUser] = React.useState(null);
  //esto es para que un usuario ingrese a MyProfile usando sus credenciales de acceso

  //usuario para subir la informacion
  const [infoUser, setInfoUser] = useState("");

  //funcion para obtener los datos de la base de datos
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("Existe un usuario");
      setUser(auth.currentUser); //toda la informacion del usuario autenticado
      const obtenerDatos = async () => {
        try {
          const data = await db.collection("infoUser").get(); //poner doc(user.email) escoje directo, usar solo usuario, usar ingles PONER
          //const data = await db.collection("infoUser").doc(user.email).get();
          //console.log(data.docs)
          const arrayDatos = await data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(arrayDatos); //con esto almaceno el array de la informacion de los usuario

          const filtrado = arrayDatos.filter((dato) => dato.uid === user.uid); //esto hago para solo coger el objeto con cohincida con los datos del usuario loggeado

          setInfoUser(filtrado[0]); //asigno el objeto al usuario
          console.log(infoUser);
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
  }, [props.history, user]); //para que devuelva una sola vez se deja vacio

  const { Meta } = Card;

  //temporal

  return (
    <div>
      
      <div id="banner">
        <h1>
          {" "}
          {infoUser.nombre} {infoUser.apellido}
        </h1>
        <Image
          id="imagenPrincipal"
          src= {infoUser.foto}
          width={300}
          height={300}
        />
        <Image
          className="edit"
          src="../img/editar.png"
          width={50}
          height={50}
        />
        <Image
          className="edit"
          src="../img/editar.png"
          width={50}
          height={50}
        />
      </div>
      <Row id="contenido" gutter={[14, 14]}>
        <Col className="BloqueI" xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className="Bloque">
            <h1>Informacion Personal</h1>
          </div>

          <div className="informacionBloque">
            <div className="informacion">
              <h2 className="item">
                <b>Nombre:</b> {infoUser.nombre} {infoUser.apellido}
              </h2>
              <h2 className="item">
                <b>Edad:</b> 26 años
              </h2>
              <h2 className="item">
                <b>País:</b> {infoUser.pais}
              </h2>
              <h2 className="item">
                <b>Ciudad:</b> {infoUser.ciudad}
              </h2>

              <div className="seguidoresBloque">
                <Button className="botonBloque">Seguidores</Button>
                <p> {infoUser.numFollowers}</p>
              </div>
            </div>
          </div>
        </Col>

        <Col className="BloqueIII" xs={24} sm={24} md={24} lg={8} xl={8}>
          <div id="postBloque">
            <div id="post">
              <Input
                id="inputPost"
                placeholder="¿Qué piensas?..."
                size="large"
              />
              <Image
                className="edit"
                src="../img/editar.png"
                width={25}
                height={25}
              />
              <Image
                className="edit"
                src="../img/editar.png"
                width={25}
                height={25}
              />
              <Image
                className="edit"
                src="../img/editar.png"
                width={25}
                height={25}
              />
              <Button id="btnPostear">Postear</Button>
            </div>
          </div>
          <div id="viewPost">
            <Card
              className="postN"
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="2021-02-22" description="Un dia en la naturaleza" />
            </Card>

            <Card
              className="postN"
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="2021-02-22" description="Un dia en la naturaleza" />
            </Card>

            <Card
              className="postN"
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="2021-02-22" description="Un dia en la naturaleza" />
            </Card>
          </div>
        </Col>

        <Col className="BloqueII" xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="Bloque">
            <h1>Tus Eventos</h1>
          </div>

          <div className="eventoBloque">
            <div className="Evento">
              <div>
                <p>
                  {" "}
                  <b>Shakira </b> Sábado 9 pm{" "}
                </p>
              </div>
              <Button className="botonReservar">Ingresar</Button>
            </div>
          </div>

          <div className="Bloque">
            <h1>Próximos Eventos</h1>
          </div>
          <div className="eventoBloque">
            <div className="Evento">
              <div>
                <p>
                  {" "}
                  <b>Widinson </b> 3 de Octubre 9 pm{" "}
                </p>
              </div>
              <Button className="botonReservar">Reservar</Button>
            </div>
          </div>
          <div className="eventoBloque">
            <div className="Evento">
              <div>
                <p>
                  {" "}
                  <b>Maná </b> 10 de Octubre 9 pm{" "}
                </p>
              </div>
              <Button className="botonReservar">Reservar</Button>
            </div>
          </div>

          <div className="Bloque">
            <h1>Anuncios</h1>
          </div>
        </Col>
      </Row>
      <div></div>
    </div>
  );
}
export default withRouter(MyProfile);
