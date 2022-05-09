import React,{useContext,useEffect} from 'react'
import '../../styles/rooms.css'
import Carousel from 'react-material-ui-carousel'
import CardRoom from './CardRoom'
import { Context } from '../../context/RoomTypeController'
import { Grid } from '@mui/material'

const Rooms = () => {

  const {state} = useContext(Context);


  return (
    <div className='container'>
        <div className='items'>
            <h2>Habitaciones</h2>
                <Grid container spacing={2}>
                  {state.type_rooms.map((room) => (
                    <Grid item xs={12} md={4}>
                      <CardRoom
                        name={room.name}
                        price={room.price}
                        description={room.description}
                        id={room._id}
                        image={room.images}
                      />
                    </Grid>
                  ))}
                </Grid>
        </div>
    </div>
  )
}


export default Rooms;

