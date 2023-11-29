import React from 'react'
import {Grid, Box} from '@mui/material'

import hotelSource from '../../assets/Hotel-full.jpg'

import '../../styles/description.css'

const Description = ({about}) => {
  return (
    <div className='container'>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={hotelSource}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='description'>
                  <div className='titles'>
                    <h2>Nosotros</h2>
                    <h3>{about.title}</h3>
                  </div>
                  {about.description.map((description) => (
                    <p>{description}</p>
                  ))
                  }
              </div>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Description