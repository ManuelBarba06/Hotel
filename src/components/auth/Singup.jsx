import React, { useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {Stack, Alert} from '@mui/material'
import { Formik } from 'formik'

import Input from '../common/Input'
import LayoutAuth from '../LayoutAuth/LayoutAuth'
import ButtonAuth from '../ButtonAuth/ButtonAuth'

import serverAxios from '../../config/serverAxios'

import {Context as AuthContext} from '../../context/authContext'

import './Signup.css'

const Singup = () => {
  
  const [error, setError] = useState('')
  const [execution,setExecution] = useState(false)
  const navigation = useNavigate();
  
  const {state, getToken} = useContext(AuthContext)

    useEffect(() => {
        //Verificar el token
        if (!execution) {
            getToken()
            setExecution(true)
        }
        if (state.token) {
            navigation("/")
            return () => {}
        }
    },[state])
  
  return (
    <LayoutAuth>
            <p className='textoLogo'>Bienvenido al Hotel</p>
            <span className='textoLogoDer'>Posada Real</span>
            
            <div className='formRegister'>
              <h3>Registrar</h3>
              <Formik
                validateOnChange={false}
                initialValues={{
                  name:"",
                  last_name:"",
                  address:"",
                  country:"",
                  state:"",
                  city:"",
                  email:"",
                  password:"",
                  confirm_password:"",
                  cell_phone: ""
                }}
                
                validate={({name,last_name,address,country,state,city,email,password,confirm_password,cell_phone}) => {
                  const errors = {}
                  if (!name) {
                    errors.name = 'Requiere'
                  }else if (name.length < 4) {
                    errors.name = "El nombre tiene que tener 4 caracteres minimo"
                  }
                  
                  if (!last_name) {
                    errors.last_name = 'Requiere'
                  } else if (last_name.length < 4) {
                    errors.last_name = "El apellido tiene que tener 4 caracteres minimo"
                  }
                  
                  if (!address) {
                    errors.address = 'Requiere'
                  } else if (address.length < 4) {
                    errors.address = "La direccion tiene que tener 4 caracteres minimo"
                  }
                  
                  if (!country) {
                    errors.country = "El pais es obligatorio"
                  }
                  if (!state) {
                    errors.state = "El estado es obligatorio"
                  }
                  if (!city) {
                    errors.city = "La ciudad es obligatoria"
                  }
                  
                  if (!email) {
                    errors.email = 'Requiere'
                  } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
                  ) {
                    errors.email = 'Correo invalido'
                  }
                  
                  if (password.length < 6) {
                    errors.password = 'La contraseña deber tener 6 caracteres'
                  }
                  
                  if (password !== confirm_password){
                    errors.confirm_password = "No son iguales"
                  }
                  
                  if (!cell_phone) {
                    errors.cell_phone = 'Requiere'
                  } else if (cell_phone.length !== 10) {
                    errors.cell_phone = "Se necesita 10 digitos"
                  }
                  
                  return errors
                }}
                
                onSubmit={async(values, {setSubmitting}) => {
                  try {
                    const {data} = await serverAxios.post("/user/create/customer",values)
                    setError("")
                    setSubmitting(false)
                    localStorage.setItem('token-hotel',data.data.token)
                    navigation('/')
                  }catch(error){
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
                  handleSubmit
                }) => (
                  <form
                    onSubmit={handleSubmit}
                  >
                    {
                        error !== "" ?
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
                    <div
                      className='divLine'
                    >
                      <Input
                        error={errors.name !== undefined}
                        label={"Nombre(s)"}
                        type={""}
                        name={"name"}
                        value={values.name}
                        handleChange={handleChange}
                        errorText={errors.name}
                      />
                      <Input
                        error={errors.last_name !== undefined}
                        label={"Apellido(s)"}
                        type={""}
                        name={"last_name"}
                        value={values.last_name}
                        handleChange={handleChange}
                        errorText={errors.last_name}
                      />
                    </div>
                    <br/>
                    <div
                      className='divLine'
                    >
                      <Input
                        error={errors.country !== undefined}
                        label={"Pais"}
                        type={""}
                        name={"country"}
                        value={values.country}
                        handleChange={handleChange}
                        errorText={errors.country}
                      />
                      <Input
                        error={errors.state !== undefined}
                        label={"Estado"}
                        type={""}
                        name={"state"}
                        value={values.state}
                        handleChange={handleChange}
                        errorText={errors.state}
                      />
                      <Input
                        error={errors.city !== undefined}
                        label={"Ciudad"}
                        type={""}
                        name={"city"}
                        value={values.city}
                        handleChange={handleChange}
                        errorText={errors.city}
                      />
                    </div>
                    <br/>
                    <div
                      className='divLine'
                    >
                      <Input
                        error={errors.address !== undefined}
                        label={"Domicilio"}
                        type={""}
                        name={"address"}
                        value={values.address}
                        handleChange={handleChange}
                        errorText={errors.address}
                      />
                      <Input
                        error={errors.cell_phone !== undefined}
                        label={"Numero de telefonico"}
                        type={""}
                        name={"cell_phone"}
                        value={values.cell_phone}
                        handleChange={handleChange}
                        errorText={errors.cell_phone}
                      />
                    </div>
                    <br/>
                    <div
                      className='divLine'
                    >
                      <Input
                        error={errors.email !== undefined}
                        label={"Correo"}
                        type={"email"}
                        name={"email"}
                        value={values.email}
                        handleChange={handleChange}
                        errorText={errors.email}
                      />
                    </div>
                    <br/>
                    <div
                      className='divLine'
                    >
                      <Input
                        error={errors.password !== undefined}
                        label={"Contraseña"}
                        type={"password"}
                        name={"password"}
                        value={values.password}
                        handleChange={handleChange}
                        errorText={errors.password}
                      />
                      <Input
                        error={errors.confirm_password !== undefined}
                        label={"Confirmar contraseña"}
                        type={"password"}
                        name={"confirm_password"}
                        value={values.confirm_password}
                        handleChange={handleChange}
                        errorText={errors.confirm_password}
                      />
                    </div>
                    <br/>
                    <ButtonAuth title={"Registrar"} isSubmitting={isSubmitting}/>
                  </form>
                )}
              </Formik>
            </div>
    </LayoutAuth>
    )
}

export default Singup