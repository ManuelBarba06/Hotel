import React, { useEffect, useState, useContext } from 'react'
import Layout from '../Layout'
import axios from 'axios'
import serverAxios from '../../config/serverAxios'
import NavBar from '../navBar/NavBar'
import '../../styles/main.css'
import Description from '../description/Description'
import { Element } from 'react-scroll'
import Pictures from '../Pictures/Pictures'
import Rooms from '../Rooms/Rooms'
import Maps from '../Maps/Maps'
import Services from '../Services/Services'
import ReservationComp from '../Reservation/ReservationComp'
import { Context } from '../../context/RoomTypeController'

const Main = () => {
  const [nombre,setNombre] = useState('');
  const [valido, setValido] = useState(false);
  const {getRoomsType} = useContext(Context);
  useEffect(() => {
    const token = localStorage.getItem('token-hotel');
        if(token){
          obtenerInformacion(token);
        }
  },[])

  useEffect(() => {
    getRoomsType();
  }, []);


  const obtenerInformacion = async (token) => {
    try{
      const response = await serverAxios.get("/customer/get",{
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
      <NavBar/>
      <div>
        <div className='image'>
          <img src="https://images.squarespace-cdn.com/content/v1/57d2fd483e00be654dfeff17/1634748681495-LCFPC985CO0XW62QVAKD/Screen+Shot+2018-10-29+at+5.19.15+PM.png" alt='hotel-main'/>
        </div>
        <ReservationComp/>
      </div>
      <Element name='description'>
       <Description/>
      </Element>
      <Element name="pictures">
        <Pictures/>
      </Element>
      <Element name='rooms'>
        <Rooms/>
      </Element>
      <Element name='maps'>
        <Maps/>
      </Element>
      <Element name='services'>
        <Services/>
      </Element>
    </Layout>
  )
}

export default Main