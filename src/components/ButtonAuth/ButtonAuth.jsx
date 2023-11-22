import React from 'react'
import {Button} from '@mui/material'

import './ButtonAuth.css'

const ButtonAuth = ({title,isSubmitting}) => {
  return (
    <Button
        type='submit'
        variant='contained'
        disabled={isSubmitting}
    >
        {title}
    </Button>
  )
}

export default ButtonAuth