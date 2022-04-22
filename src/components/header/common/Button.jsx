import React from 'react'
import styled from 'styled-components'

const Button = ({nombre}) => {

  const StyledA = styled.a`
    text-decoration: none;
    color: #686868;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover{
      color: white;
      background-color: #A8A7A7;
      transition-duration: 0.5s;
      cursor: pointer;
    }
    label{
      cursor: pointer;
    }
  `

  return (
    <StyledA href='/login'>
        <label>
            {nombre}
        </label>
    </StyledA>
  )
}

export default Button