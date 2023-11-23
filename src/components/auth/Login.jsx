import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {TextField, Stack, Alert} from '@mui/material'
import { Formik } from 'formik';

import ButtonAuth from '../ButtonAuth/ButtonAuth';
import LayoutAuth from '../LayoutAuth/LayoutAuth';

import serverAxios from '../../config/serverAxios'

import './Login.css'

const Login = () => {
    const navigation = useNavigate();
    
    const [error,setError] = useState('');

    useEffect(() => {
        //Verificar el token
        const token = localStorage.getItem('token-hotel');
        if(token){
            navigation("/");
        }
    },[])
    
  return (
    <LayoutAuth>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {}
                        if (!values.email) {
                            errors.email = 'Requiere'
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Correo invalido'
                        }
                        
                        if (values.password.length < 6) {
                            errors.password = 'La contraseña deber tener 6 caracteres'
                        }
                        return errors
                    }}
                    onSubmit={async(values, {setSubmitting}) => {
                        try{
                            const {data} = await serverAxios.post("/user/signin",values)
                            setError("")
                            setSubmitting(false)
                            localStorage.setItem('token-hotel',data.data.token)
                            navigation('/')
                        }catch(error) {
                            const {data} = error.response
                            setError(data.data.msg)
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleSubmit,
                    })=> (
                        <form onSubmit={handleSubmit}>
                            <p className='textoLogo'>Bienvenido al Hotel</p>
                            <span className='textoLogoDer'>Posada Real</span>
                            <h3>Iniciar Sesión</h3>
                            {
                                error != "" ?
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="error" variant='filled'
                                        sx={{fontSize: 12}}
                                    >
                                        {error}
                                    </Alert>
                                </Stack>
                                : null
                            }
                            <br/>
                            <TextField
                                error={errors.email != undefined}
                                label="Correo"
                                type='email'
                                name='email'
                                variant='filled'
                                value={values.email}
                                onChange={handleChange}
                                className='inputLogin'
                                inputProps={{
                                    style: {fontSize: 15}
                                }}
                                InputLabelProps={{
                                    style: {
                                        fontSize: 15
                                    }
                                }}
                                helperText={errors.email}
                                FormHelperTextProps={{
                                    style: {
                                        fontSize: 15
                                    }
                                }}
                            />
                            <br/>
                            <TextField
                                error={errors.password != undefined}
                                 label="Contraseña"
                                 type='password'
                                 name='password'
                                 variant='filled'
                                 value={values.password}
                                 onChange={handleChange}
                                 className='inputLogin'
                                 inputProps={{
                                     style: {fontSize: 15}
                                 }}
                                 InputLabelProps={{
                                     style: {
                                         fontSize: 15
                                     }
                                 }}
                                 helperText={errors.password}
                                 FormHelperTextProps={{
                                    style: {
                                        fontSize: 15
                                    }
                                }}
                            />
                            <br/>
                            <ButtonAuth title={"Iniciar sesión"} isSubmitting={isSubmitting}/>
                        </form>
                    )}
                </Formik>
                <br/>
                <a href='/signup' className='textReg'>
                    <span>Aun no tienes una cuenta?</span>
                    <span>Registrar</span>
                </a>
            {/* {error !== ''
                ?<label>{error}</label>
                :null
            } */}
    </LayoutAuth>
  )
}

export default Login