import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../../styles/reservation.css'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Context } from '../../context/RoomTypeController';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const ReservationComp = () => {
  const {state} = useContext(Context)


  useEffect(() => {

  },[])
  return (
    <Formik
    initialValues={{
      checkIn: '',
      checkOut: '',
      people: 0,
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
            <TextField
                name='checkIn'
                className='items'
                id="date"
                label="Check-in"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true
                }}
                onChange={handleChange}
                
            />
            <TextField
                id="date"
                name='checkOut'
                label="Check-out"
                className='items'
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleChange}
            />
            <FormControl className='person'>
            <InputLabel id="demo-simple-select-label">Personas</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              name='people'
              value={values.people}
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='tiposCuartos'>
            <InputLabel id="demo-simple-select-label">Tipos de cuartos</InputLabel>
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
          {!(dirty && isValid)
              ?<Link  to="#" style={{width: '20%', height: "100%", textDecoration: 'none'}}>
                  <Button className='button' disabled={!(dirty && isValid)}>
                      Reservar
                  </Button>
                </Link>
              :<Link  to="/reservation" state={{checkIn: values.checkIn, checkOut: values.checkOut, people: values.people, type: values.type}} style={{width: '20%', height: "100%", textDecoration: 'none'}}>
                  <Button className='button' >
                      Reservar
                  </Button>
                </Link>
          }
        </div>
      )}
    />
    
  )
}

export default ReservationComp