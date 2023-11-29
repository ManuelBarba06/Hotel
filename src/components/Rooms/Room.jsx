import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container,Grid,Modal} from '@mui/material';
import Spinner from 'react-spinner-material';
import { Context } from '../../context/room_typeContext';
import Layout from '../Layout';
import '../../styles/rooms.css'
import GalleryRoom from './GalleryRoom';
import PhotoModal from './PhotoModal';

const Room = () => {
    const {id} = useParams();
    const {state,getRoom} = useContext(Context)
    const [image,setImage] = useState('');
    const [open,setOpen] = useState(false);

    useEffect(() => {
        getRoom({id});
    },[])
   
  return (
    <Layout>
        {state.room !== null
          ?<Container className='containerRoom'>
            <PhotoModal
              image={image}
              setOpen={setOpen}
              open={open}
            />
            <h3>{state.room.name}</h3>
            <GalleryRoom
              images={state.room.images}
              setImage={setImage}
              setOpen={setOpen}
            />
            <Grid
              container spacing={1}
            >
              <Grid  item xs={12} md={6}>
                <h4>Descripción</h4>
                <p>{state.room.description}</p>
              </Grid>
              <Grid  item xs={12} md={6}>

              </Grid>
            </Grid>
           </Container>
          :<div>
            <Spinner radius={120} color={"#333"} stroke={2} visible={true}/>
          </div>
        }
    </Layout>
  )
}

export default Room