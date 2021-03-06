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
            setUser(auth.currentUser);
        } else {
            console.log('no existe un usuario')
            //redirigir al usuario al login
            props.history.push('/ingresar');
        }
    }, [])
    return (
        <div>
            <h1>Mi perfil</h1>
            <p>Kevin Morales</p>
            <h2>Ruta protegida</h2>
            
        </div>
    )
}
export default withRouter(MyProfile);