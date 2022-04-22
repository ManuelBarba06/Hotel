import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import axios from 'axios'
import clientAxios from '../../config/axios'
import NavBart from '../navBar/NavBar'

const Main = () => {
  const [nombre,setNombre] = useState('');
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token-hotel');
        if(token){
          obtenerInformacion(token);
        }
  },[])

  const obtenerInformacion = async (token) => {
    try{
      const response = await clientAxios.get("/customer/get",{
          headers: {
              'x-auth-token' : token
            }})
      setNombre(response.data.name);
      setValido(true)
    }catch(err){
      console.log(err.response);
    }
  }

  return (
    <Layout nombre={nombre} valido={valido}>
      <NavBart/>  
    </Layout>
  )
}

export default Main