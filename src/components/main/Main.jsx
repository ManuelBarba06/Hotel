import React, { useEffect, useState, useContext } from 'react'
import { Element } from 'react-scroll'
import {Typography} from '@mui/material'

import Layout from '../Layout'
import NavBar from '../navBar/NavBar'
import serverAxios from '../../config/serverAxios'
import Description from '../description/Description'
import Pictures from '../Pictures/Pictures'
import Rooms from '../Rooms/Rooms'
import Maps from '../Maps/Maps'
import Services from '../Services/Services'
import ReservationComp from '../Reservation/ReservationComp'

import '../../styles/main.css'

import { Context } from '../../context/RoomTypeController'
import { useAbout } from '../../hooks/UseAbout'

const Main = () => {

  const {getRoomsType} = useContext(Context);
  const {about, isLoading} = useAbout()

  return (
    <Layout>
      <NavBar/>
      <div>
        <div className='imageDiv'/>
        <ReservationComp/>
      </div>
      <Element name='description'>
        {
          isLoading == false 
            ? <Description
                about={about}
              />
            : null
        }
      </Element>
      <Element name='services'>
        {
          isLoading == false
            ? <Services
                serviceDescription={about.service_description}
              />
            : null
        }
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
    </Layout>
  )
}

export default Main