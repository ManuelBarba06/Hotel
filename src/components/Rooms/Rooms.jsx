import React,{useContext,useEffect} from 'react'
import { Grid, Box } from '@mui/material'

import CardRoom from './CardRoom'

import { Context } from '../../context/room_typeContext'

import '../../styles/rooms.css'

const Rooms = () => {

  const {state, getRoomsType} = useContext(Context);

  useEffect(() => {
    getRoomsType()
  },[])

  return (
    <div className='container-rooms'>
        <div className='items'>
            <h2>Habitaciones</h2>
            <h3>Cuartos y Suites</h3>
                <Box sx={{ 
                  flexGrow: 1,
                  padding: 10,
                  display: "flex",
                  justifyContent: 'center'
                  }}>
                    <Grid 
                      container
                      spacing={5}
                      sx={{
                        width: "80%"
                      }}
                    >
                      {state.type_rooms.map((room) => (
                        <Grid 
                          item xs={12} 
                          md={4}
                        >
                          <CardRoom
                            name={room.name}
                            price={room.price}
                            description={room.description}
                            id={room._id}
                            image={room.image_url[0]}
                          />
                        </Grid>
                      ))}
                    </Grid>
                </Box>
        </div>
    </div>
  )
}


export default Rooms;

