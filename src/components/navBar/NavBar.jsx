import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'

const NavBar = () => {

  const StyledUl = styled.ul`
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      height: 50px;
      li {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      li:hover{
        border-bottom: 5px solid #BE0E0E;
        transition-duration: 0.2s;
      }
  `

  return (
    <StyledUl>
        <li><Link>Detalle</Link></li>
        <li><Link>Fotos</Link></li>
        <li><Link>Habitaciones</Link></li>
        <li><Link>Mapa</Link></li>
        <li><Link>Servicios</Link></li>
    </StyledUl>
  )
}

export default NavBar