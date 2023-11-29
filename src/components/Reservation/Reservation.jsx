import React,{useContext,useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import '../../styles/reservation.css'

import { Context } from '../../context/room_typeContext';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from "react-router-dom";
import ReservationCustomer from './ReservationCustomer';
import ReservationTransaction from './ReservationTransaction';
import { Container, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ReservationTotal from './ReservationTotal';


const Initialreservation = {
  id_room_type: '',
  check_in: '',
  check_out:'',
  number_person: 0
}

const initialCustomer = {
  name:"",
  last_name: "",
  country: "",
  state: "",
  city: "",
  email: '',
  cell_phone: 0
}

const initialTransaction = {
  reference: '',
  credit_card: ''
}

const Reservation = () => {
  const {state,getRoomsType} = useContext(Context)
  const [reservationForm, setReservationForm] = useState(Initialreservation)
  const [customerForm, setCustomerForm] = useState(initialCustomer)
  const location = useLocation();
  
  useEffect(() => {
    getRoomsType();
    if(location.state)
      setReservationForm({
        ...reservationForm, check_in:location.state.checkIn, check_out: location.state.checkOut, number_person: location.state.people, id_room_type: location.state.type 
      })
  }, []);

  return (
    <div className='containerScreen'>
      <Container disableGutters maxWidth={false} className='container'>
          <h2>Reservación</h2>
          <Grid container spacing={1}>
              <Grid item xs={12} md={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <div className='form'>
                    <div>
                      <Container>
                        <Typography variant="h5" gutterBottom component="div">Datos del cuarto</Typography>
                        <Grid container spacing={5}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              name='checkIn'
                              className='items'
                              id="date"
                              label="Check-in"
                              type="date"
                              fullWidth
                              InputLabelProps={{
                              shrink: true
                              }} 
                              value={reservationForm.check_in}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="date"
                              name='checkOut'
                              label="Check-out"
                              className='items'
                              type="date"
                              fullWidth
                              InputLabelProps={{
                              shrink: true,
                              }}
                              value={reservationForm.check_out}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <FormControl className='person'>
                              <InputLabel id="demo-simple-select-label">Personas</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name='people'
                                fullWidth
                                value={reservationForm.number_person}
                              >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <FormControl className='tiposCuartos'>
                              <InputLabel id="demo-simple-select-label">Tipos de cuartos</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name='type'
                                value={reservationForm.id_room_type}
                              >
                                {state.type_rooms.map((room) => (
                                    <MenuItem key={room._id} value={room._id}>{room.name}</MenuItem>
                                ))
                                }
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Container>
                      <ReservationCustomer
                        customerForm={customerForm}
                        setCustomerForm={setCustomerForm}
                      />
                      <ReservationTransaction/>
                      <ReservationTotal/>
              </div>
            </div>
          </Grid>
        </Grid> 
      </Container>
    </div>
  )
}

export default Reservation