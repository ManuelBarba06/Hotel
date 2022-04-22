import React, {useEffect, useState} from 'react'
import Button from './common/Button'
import styled from 'styled-components'

const Header = ({nombre, valido}) => {
  
  const LogoStyled = styled.a`
    text-decoration: none;
  `
  const StyledHeader = styled.div`
     padding: 0 3rem;
     display: flex;
     position: relative;
     height: 70px;
     background-color: white;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 0.1px 5px;
  `

  const StyledBar = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }
  `

  return (
    <StyledHeader>
            <StyledBar>
                <LogoStyled href='/'>
                    <h2 className='heading'>Hotel Posada Real</h2>
                </LogoStyled>
                {!valido
                  ?<Button nombre={"Iniciar Sesión"}/>
                  :<h3>Bievenido {nombre}</h3>
                }
            </StyledBar>
    </StyledHeader>
  )
}

export default Header