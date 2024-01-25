import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-spinner-material';
import {Grid, Paper} from '@mui/material';
import Carrousel from 'react-material-ui-carousel'


import { Context } from '../../context/room_typeContext';

import Layout from '../Layout';

import '../../styles/rooms.css'
import FormReservation from './FormReservation';

const Room = () => {
    
    const {id} = useParams();
    
    const {state,getRoom} = useContext(Context)
    const {room} = state
    
    useEffect(() => {
        getRoom({id});
    },[])
   
  return (
    <Layout>
        {state.room !== null
          ?<div className='containerRoom'>
              <h2 className='titleRoom'>{room.name}</h2>
              <Carrousel
                height={"60vh"}
                fullHeightHover={false}  
                sx={{
                  width:"55vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {
                  room.image_url.map((image)=> (
                    <img src={image} alt="Room type image" className='img-carrousel'/>
                  ))
                }
              </Carrousel>
              <Grid 
                container
                sx={{
                  width: "55vw",
                  marginTop: "10px"
                }}
                spacing={2}
              >
                <Grid 
                  item
                  xs={12} 
                  md={6}
                >
                  <div
                    className='info-room-container'
                  >
                    <h3>Caracteristicas</h3>
                    <p>{state.room.description}</p>
                    
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <Paper 
                    elevation={3}
                    sx={{
                      padding: "10px"
                    }}
                  >
                    <h4 className='price-text'>${room.price} MXN / Noche</h4>
                    
                    <FormReservation
                      price={room.price}
                    />
                    
                  </Paper>
                </Grid>
              </Grid>
            </div>
            :<div>
              <Spinner radius={120} color={"#333"} stroke={2} visible={true}/>
          </div>
        }
    </Layout>
  )
}

export default Room