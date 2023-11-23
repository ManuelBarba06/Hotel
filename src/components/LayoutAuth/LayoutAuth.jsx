import React from 'react'

import './LayoutAuth.css'

import roomSource from '../../assets/room.jpg'

const LayoutAuth = ({children}) => {
  return (
    <div className='divContainerLogin'>
      <div className='container-login'>
        <div className='form-login'>
          {children}
        </div>
        <img
                src={roomSource}
                className='imageRoom'
            />
      </div>
    </div>
  )
}

export default LayoutAuth