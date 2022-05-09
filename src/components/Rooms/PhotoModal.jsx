import { Modal } from '@mui/material'
import React from 'react'

const PhotoModal = ({image,open,setOpen}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius:10,
        p: 4,
      };
  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
    >  
        <div style={style}>
            <img src={image} alt={"Image-Modal"}/>
        </div>
    </Modal>
  )
}

export default PhotoModal