import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ReservationTotal = () => {
  return (
    <Container>
        <Typography variant="h4" style={{marginTop: '20px'}}>Detalles del Precio</Typography>
        <Grid container spacing={1}>
            <Grid item  xs={12} md={3}>
                <Typography variant="h5">IVA</Typography> 
            </Grid>
            <Grid item  xs={12} md={9}>
                <Typography variant="h5">125544</Typography> 
            </Grid>
            <Grid item  xs={12} md={3}>
                <Typography variant="h5">Sub total</Typography> 
            </Grid>
            <Grid item  xs={12} md={9}>
                <Typography variant="h5">125544</Typography> 
            </Grid>
            <Grid item  xs={12} md={3}>
                <Typography variant="h5">Total</Typography> 
            </Grid>
            <Grid item  xs={12} md={9}>
                <Typography variant="h5">125544</Typography> 
            </Grid>
        </Grid>
    </Container>
  )
}

export default ReservationTotal