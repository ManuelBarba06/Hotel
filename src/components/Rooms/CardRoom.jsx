import React from 'react'
import { Paper, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import '../../styles/rooms.css'

const CardRoom = ({name,price,description,id,image}) => {
    const navigate = useNavigate();
    
    const onPress = () => {
      navigate(`/room/${id}`);
      window.location.reload();
    }
      
  return (
    <Paper className='containerCard' elevation={6} onClick={() => onPress()}>
        <img src={image} alt={name + " image"}/>
        <div className='divCard'>
            <div className='containerBook'>
              <div className='priceContainer'>
                <label>${price} MXN</label>
              </div>
              <div className='buttonBooking'>
              <label>Reservar</label>
              </div>
            </div>
            <h5>{name}</h5>
            <div style={{marginTop: "10px"}}>
              <p>{description.split('.')[0]}</p>
            </div>
        </div>
    </Paper>
  )
}

export default CardRoom