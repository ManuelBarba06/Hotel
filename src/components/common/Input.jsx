import React from 'react'

const Input = ({nombre,tipo}) => {
  return (
    <div className='inputContainer'>
        <label>{nombre}</label>
        <input type={tipo}/>
    </div>
  )
}

export default Input