import React from 'react'
import { TextField } from '@mui/material'

const Input = ({error,label,type,name,value,handleChange,errorText}) => {
  return (
    <TextField
      error={error}
      label={label}
      type={type}
      name={name}
      variant='filled'
      value={value}
      onChange={handleChange}
      className='inputLogin'
      inputProps={{
          style: {fontSize: 20}
      }}
      InputLabelProps={{
          style: {
              fontSize: 20
          }
      }}
      helperText={errorText}
      FormHelperTextProps={{
          style: {
              fontSize: 20
          }
      }}
   />
  )
}

export default Input