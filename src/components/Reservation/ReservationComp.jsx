import React, {useContext, useEffect} from 'react'
import { Button, TextField, MenuItem, FormControl, InputLabel, Select, Grid} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Formik, ErrorMessage } from 'formik';

import { Context } from '../../context/RoomTypeController';

import '../../styles/reservation.css'

const ReservationComp = () => {
  const {state} = useContext(Context)


  useEffect(() => {

  },[])
  return (
    <Formik
    initialValues={{
      checkIn: '',
      checkOut: '',
      people: "",
      type: ''
    }}
    validationSchema={
      Yup.object().shape({
        checkIn: Yup.date().required('Es necesita una fecha de entrada'),
        checkOut: Yup.date().required('Es necesita una fecha de salida'),
        people: Yup.number().required('Es necesario seleccionar el numero de personas'),
        type: Yup.string().required('Es necesario el tipo de cuarto')
      })
    }
    render = {
      (
        {
          values,
          errors,
          status,
          touched,
          handleChange,
          dirty,
          isValid
        }
      ) => (
        <div className='containerReserv'>
            <span>Reservación</span>
            <Grid container>
              <form>
                <Grid xs={6} md={3}>
                  <DatePicker
                    label="Check-in"
                    onChange={() => {}}
                    renderInput={(params) => <TextField 
                      {...params} 
                      fullWidth
                      inputProps={{
                        style: {fontSize: 15}
                      }}
                      InputLabelProps={{
                          style: {
                              fontSize: 15
                          }
                      }}
                    />}
                    value={null}
                  />
                </Grid>
                <Grid md={3}>
                  <DatePicker
                    label="Check-out"
                    onChange={() => {}}
                    renderInput={(params) => <TextField 
                      {...params} 
                      fullWidth
                      inputProps={{
                          style: {fontSize: 15}
                      }}
                      InputLabelProps={{
                          style: {
                              fontSize: 15
                          }
                      }}
                      />}
                    value={null}
                  />
                </Grid>
                <Grid md={2}>
                  <FormControl
                    sx={{width: "100%"}}
                  >
                  <InputLabel 
                    id="demo-simple-select-label"
                    sx={{
                      fontSize: 15
                    }}
                  >
                    Personas
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    name='people'
                    value={values.people}
                    onChange={handleChange}
                  >
                    <MenuItem 
                      value={1}
                      sx={{fontSize: 15}}
                    >
                      1
                    </MenuItem>
                    <MenuItem 
                      value={2}
                      sx={{fontSize: 15}}
                    >
                      2
                    </MenuItem>
                    <MenuItem 
                      value={3}
                      sx={{fontSize: 15}}
                    >
                      3
                    </MenuItem>
                    <MenuItem 
                      value={4}
                      sx={{fontSize: 15}}
                    >
                      4
                    </MenuItem>
                  </Select>
                  </FormControl>
                </Grid>
                <Grid md={2}>
                  <FormControl 
                    sx={{width: "100%"}}
                  >
                    <InputLabel 
                      id="demo-simple-select-label"
                      sx={{
                        fontSize: 15
                      }}
                    >
                      Tipos de cuartos
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                      value={values.type}
                      name='type'
                      onChange={handleChange}
                    >
                      {state.type_rooms.map((room) => (
                          <MenuItem key={room._id} value={room._id}>{room.name}</MenuItem>
                      ))
                      }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid md={2}>
                  <Button className='button' >
                    Reservar
                  </Button>
                </Grid>
              </form>
            </Grid>
        </div>
      )}
    />
    
  )
}

export default ReservationComp