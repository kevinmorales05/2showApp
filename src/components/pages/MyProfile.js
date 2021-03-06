import React from 'react';
import {auth} from '../firebase'
import { withRouter } from 'react-router';

 function MyProfile(props) {
     //state del usuario vigente
     const [user, setUser] = React.useState(null)
    //esto es para que un usuario ingrese a MyProfile usando sus credenciales de acceso
    React.useEffect(()=> {
        if(auth.currentUser){
            console.log('Existe un usuario')
            setUser(auth.currentUser); //toda la informacion del usuario
        } else {
            console.log('no existe un usuario')
            //redirigir al usuario al login
            props.history.push('/ingresar');
        }
    }, [props.history]) //para que devuelva una sola vez se deja vacio
    return (
        <div>
            <h1>Mi perfil</h1>
            <p>Kevin Morales</p>
            <h2>Ruta protegida</h2>
            <h2>email</h2>
            {
                user && (
                    <div>
                        <h3> {user.email}</h3>
                        <h3> {user.nombre}</h3>
                        <h3> {user.apellido}</h3>

                    </div>
                    
                  
                    
                )
            }
             
         



           
            
            
        </div>
    )
}
export default withRouter(MyProfile);