import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../../styles/rooms.css';

const GalleryRoom = ({images,setImage,setOpen}) => {
  
    const openModal = (image) => {
        setImage(image);
        setOpen(true);
    }

  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={images[0].url} alt={images[0].url} className='principalImage' width='100%' height="100%" onClick={() => openModal(images[0].url)}/>
            </Grid>
            <Grid item xs={12} md={6}>
                    <Grid container spacing={1}>
                        {images.map((value,index) => (
                                index > 0
                                ?<Grid item xs={12} md={6}>
                                    <img src={value.url} className='containerImage' width='100%' height="100%" onClick={() => openModal(value.url)}/>
                                 </Grid>
                                :null
                        ))}
                    </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default GalleryRoom