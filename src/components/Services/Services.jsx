import React from 'react'
import {Grid, Box} from '@mui/material'

import ServiceCard from './common/ServiceCard'

import { servicesData } from '../../data/servicesData'

import "../../styles/service.css"

const Services = ({serviceDescription}) => {
  return (
    <div className='serviceContainer'>
      <h2>Servicios</h2>
      <h3>Hotel Posada Real</h3>
      <p>{serviceDescription}</p>
      <Box sx={{ flexGrow: 1, padding: 10 }}>
        <Grid container spacing={5}>
          {
            servicesData.map((service) => (
              <Grid item xs={12} md={4}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))
          }
        </Grid>
        
      </Box>
    </div>
  )
}

export default Services