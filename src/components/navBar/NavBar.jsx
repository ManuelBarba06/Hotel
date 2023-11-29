import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'

const NavBar = () => {

  const StyledUl = styled.ul`
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      height: 80px;
      width: 100%;
      position: absolute;
      margin: 0;
      background-color: rgb(0,0,0,0.5);
      li {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
      }
      li:hover{
        border-bottom: 5px solid #BE0E0E;
        transition-duration: 0.2s;
        cursor: pointer;
      }
  `

  return (
    <StyledUl>
        <li><Link activeClass='active' to='description' spy={true} smooth={true} duration={500}>Nosotros</Link></li>
        <li><Link activeClass='active' to='services' spy={true} smooth={true} duration={500}>Servicios</Link></li>
        <li><Link activeClass='active' to='rooms' spy={true} smooth={true} duration={500}>Habitaciones</Link></li>
        <li><Link activeClass='active' to='pictures' spy={true} smooth={true} duration={500}>Fotos</Link></li>
        <li><Link  activeClass='active' to='maps' spy={true} smooth={true} duration={500}>Mapa</Link></li>
    </StyledUl>
  )
}

export default NavBar