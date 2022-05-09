import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Container, Grid } from "@mui/material";

const ReservationTransaction = () => {
  const month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const year = [2022,2023,2024,2025,2026,2027,2028,2029,2030]

  return (
    <Container>
        <Typography variant="h5" sx={{marginTop: '2rem' ,marginBottom: '2rem'}}>
            Datos de Pago
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <TextField
              id="outlined-basic"
              label="Numero de tarjeta"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mes</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="country"
                name="country"
              >
                {month.map((value,index)=>(
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Año</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="country"
                name="country"
              >
                {year.map((value,index)=>(
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="outlined-basic"
              label="Codigo de seguridad"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
    </Container>
  )
}

export default ReservationTransaction