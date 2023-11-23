import React from 'react'
import {Button} from '@mui/material'

import './ButtonAuth.css'

const ButtonAuth = ({title,isSubmitting}) => {
  return (
    <Button
        type='submit'
        variant='contained'
        disabled={isSubmitting}
        color='error'
        sx={{
          fontSize: "1vw"
        }}
    >
        {title}
    </Button>
  )
}

export default ButtonAuth