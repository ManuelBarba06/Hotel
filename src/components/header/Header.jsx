import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'

import Button from './common/Button'

import {Context as AuthContext} from '../../context/authContext'
import Menu from './common/Menu'

const Header = () => {
  
  const {state, getToken} = useContext(AuthContext)
  
  useEffect(() => {
    getToken()
  },[])
  
  const LogoStyled = styled.a`
    text-decoration: none;
  `
  const StyledHeader = styled.div`
     padding: 0 3rem;
     display: flex;
     position: relative;
     height: 70px;
     background-color: #BE0E0E;
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
                {!state.token
                  ?<Button nombre={"Iniciar Sesión"}/>
                  :<Menu/>
                }
            </StyledBar>
    </StyledHeader>
  )
}

export default Header