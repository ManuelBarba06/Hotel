import React from 'react'
import Footer from './Footer'
import Header from './header/Header'

const Layout = (props) => {
  return (
    <div>
        <Header nombre={props.nombre} valido={props.valido}/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout