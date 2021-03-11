import React, {useState} from 'react'
import {Card} from 'antd';
import {db, auth} from '../firebase'

const { Meta } = Card;

export default function Eventos() {

//state del usuario vigente, el autenticado
const [user, setUser] = React.useState(null);
//esto es para que un usuario ingrese a MyProfile usando sus credenciales de acceso

//usuario para subir la informacion
const [eventos, setEventos] = useState("");
//funcion para obtener los datos de la base de datos

React.useEffect(() => {
    if (auth.currentUser) {
      console.log("Existe un usuario");
      setUser(auth.currentUser); //toda la informacion del usuario autenticado
      const obtenerDatos = async () => {
        try {
          const data = await db.collection("eventos").get(); //poner doc(user.email) escoje directo, usar solo usuario, usar ingles PONER
          //const data = await db.collection("infoUser").doc(user.email).get();
          //console.log(data.docs)
          const arrayEventos = await data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(arrayEventos); //con esto almaceno el array de la informacion de los usuario
          
          setEventos(arrayEventos);//aqui tengo todos los eventos
          

          
        } catch (error) {
          console.log(error);
        }
      };
      obtenerDatos();
    } else {
      console.log("no existe un usuario");
      //redirigir al usuario al login
      
    }
  }, [ user]); //para que devuelva una sola vez se deja vacio




    return (
        <div>
            <h2> Eventos Disponibles</h2>
        
        
       
            
        </div>
    )
}


/*revisar este codigo
{
            eventos.map(

                (event) => (
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title={event.nomEvento} description={event.fechaProgramada} />
                        
                    </Card>
                )
            ) 
        } */