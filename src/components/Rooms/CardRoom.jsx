import React from 'react'
import { Paper, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import '../../styles/rooms.css'
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const CardRoom = ({name,price,description,id,image}) => {
    const navigate = useNavigate();
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        marginTop: '20px',
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#0069d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });

      const onPress = () => {
        navigate(`/room/${id}`);
        window.location.reload();
      }
      
      
  return (
    <Paper className='containerCard'>
        <Carousel className='divImage' navButtonsAlwaysVisible>
          {image.map((value,index) => (
            <img src={value.url} alt={name + index}/>
          ))}
        </Carousel>
        <div className='divCard'>
            <h5>{name}</h5>
            <div style={{marginTop: "10px"}}>
              <h6>Descripción</h6>
              <p>{description}</p>
              <label>Precio: ${price}</label>
            </div>
            <BootstrapButton variant="contained" disableRipple onClick={() => onPress()} fullWidth>
                Ver
            </BootstrapButton>
        </div>
    </Paper>
  )
}

export default CardRoom