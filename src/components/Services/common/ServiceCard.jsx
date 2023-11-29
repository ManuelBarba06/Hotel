import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({title,description,icon}) => {
  return (
    <div className='serviceCardContainer'>
        {icon}
        <h4>{title}</h4>
        <span>{description}</span>
    </div>
  )
}

export default ServiceCard