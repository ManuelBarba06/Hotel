import React from 'react'
import styled from 'styled-components'

const Button = ({nombre}) => {

  const StyledA = styled.a`
    text-decoration: none;
    background-color: #FFFFFF;
    color: #BE0E0E;
    font-weight: 600;
    width: 10vw;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover{
      color: white;
      background-color: #8a0b0b;
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