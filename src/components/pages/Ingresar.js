import React from 'react'
import { withRouter } from 'react-router-dom';
import {auth, db} from '../firebase'
import {useState} from 'react';

//importo el datapicker
import { DatePicker, Space } from 'antd';


 function Ingresar(props) {

    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('initialState');
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(false)
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [ciudad, setCiudad] = React.useState('');
    const [pais, setPais] = React.useState('');
    const [cuenta, setCuenta] = React.useState('')


    function onChange(date, dateString) {
        console.log(date, dateString);
      }
   

//funcion para hacer login
const login = React.useCallback(async()=>{
    try {
        const res = await auth.signInWithEmailAndPassword(email, pass)
        console.log(res.user)
        setEmail('');
        setPass('');
        setError(null);
        //esta funcion me lleva al perfil personal del usuario
        props.history.push('/myprofile');
        
    } catch (error) {
        console.log(error)
        if(error.code === 'auth/invalid-email'){
            setError('email incorrecto!')
        }
        if(error.code === 'auth/user-not-found'){
            setError('Usuario no encontrado!')
        }
        if(error.code === 'auth/wrong-password'){
            setError('Contraseña incorrecta!')
        }
   
    }
},[email,pass, props.history]) //necesito poner los estados que voy a ocupar en el callback
//no olvidar poner el props.history

    //usamos un callback
    //para llamar a la funcion para crear usuario en firebase
    const registrar = React.useCallback(async ()=>{
        try {
            const res = await auth.createUserWithEmailAndPassword(email,pass)
            console.log(res)
            console.log('Pasó todas las validaciones!')
            //crea una coleccion nueva dentro de Usuarios
            await db.collection('Usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid,

            })
            await db.collection('infoUser').doc(res.user.email).set({
                nombre: nombre,
                apellido: apellido,
                ciudad: ciudad,
                pais: pais,
                cuenta: cuenta,
                uid: res.user.uid,
                foto: 'https://pixabay.com/images/id-973460/',
                email: res.user.email,
                categoria: '',
                numFollowers: 0,
                banner: 'https://pixabay.com/images/id-3330642/',
                cumple: ''

                
                
            })
            
           //resetea los estados
            setEmail('');
            setPass('');
            setError(null);
            //esta funcion me lleva al perfil personal del usuario
            props.history.push('/myprofile');
                
        } catch (error) {
            if(error.code === 'auth/invalid-email'){
                setError('email no válido!')
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('El email ya está registrado')
                
            }
    
}

    },[email,pass, props.history, nombre,apellido, ciudad, pais, cuenta]) //necesito poner los estados que voy a ocupar en el callback
    //no olvidar poner el props.history

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }
        if(!pass.trim()){
            console.log('Ingrese Contraseña')
            setError('Ingrese Contraseña')
            return
        }
        if(pass.length < 6){
            console.log('Password mayor a 6 caracteres')
            setError('Password mayor a 6 caracteres')
            return
        }
        setError(null);
        
        //aqui vamos a registrar al nuevo usuario en firebase
        if(esRegistro){
            registrar()
           
        } else {
            login()
        }


    }
    return (
        <div className="container">
           
            <div className="mt-5">
                <h3 className='text-center'> 
                {
                    esRegistro ? 'Registrar Usuario' : 'Ingresar'
                }
                 </h3>
                <hr></hr>
                <div class="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                        <form onSubmit={procesarDatos}>
                            {
                                error && (
                                    <div className="alert alert-danger mb-2">
                                        {error}
                                    </div>
                                )
                            }
                            
                              <label for=""></label>

                              <input type="email"
                                class="form-control mb-2"  
                                placeholder="Ingrese su email"
                                onChange ={e => setEmail(e.target.value)}
                                value={email}
                                />

                                <input type="password"
                                class="form-control mb-2"  
                                placeholder="Ingrese su contraseña"
                                onChange ={e => setPass(e.target.value)}
                                value={pass}
                                /> 

                                {
                                   esRegistro ? (
                                   <div>
                                        <input type="text"
                                        class="form-control mb-2"  
                                        placeholder="Escriba su Nombre"
                                        onChange ={e => setNombre(e.target.value)}
                                        value={nombre}
                                    /> 
                                    <input type="text"
                                        class="form-control mb-2"  
                                        placeholder="Escriba su Apellido"
                                        onChange ={e => setApellido(e.target.value)}
                                        value={apellido}
                                    /> 
                                    <input type="text"
                                        class="form-control mb-2"  
                                        placeholder="Ciudad de Residencia"
                                        onChange ={e => setCiudad(e.target.value)}
                                        value={ciudad}
                                    />
                                    <input type="text"
                                        class="form-control mb-2"  
                                        placeholder="Pais de Origen"
                                        onChange ={e => setPais(e.target.value)}
                                        value={pais}
                                    />
                                      <h3>Tipo de Cuenta</h3>
                                        <form>
                                            <input type='radio' id='artista' value={cuenta} name='artista'  
                                                onChange ={e => 
                                                {
                                                    setCuenta('ART')
                                                    console.log('ART')
                                                }
                                                }/> 
                                            <label for="artista">Artista</label>
                                            <br></br>
                                            <input type='radio' id='usuario' value={cuenta} name='usuario' 
                                                onChange ={e => 
                                                {
                                                    setCuenta('USR')
                                                    console.log('USR')
                                                }
                                            } />
                                            <label for="usuario" >Usuario Normal</label>
                                        </form>
                                        <h3>Escriba la fecha de su nacimiento</h3>
                                            <Space direction="vertical">
                                                <DatePicker onChange={onChange} type='date' />
                                               
                                            </Space>

                                    </div>)
                                     : null
                                        
                                   

                                   } 
                                

                              <button type="submit"  className="btn btn-dark btn-lg btn-block text-aling-center mb-2" >
                              {
                                    esRegistro ? 'Registrar Usuario' : 'Ingresar'
                                }
                              </button>
                              <br></br>
                              <button type="button" className="btn btn-info btn-lg btn-block text-aling-center" 
                                onClick={()=> setEsRegistro(!esRegistro)}
                              >{
                                esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'
                              }</button>
                            
                        </form>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default  withRouter(Ingresar);