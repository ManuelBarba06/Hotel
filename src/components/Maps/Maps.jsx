import React from 'react'
import '../../styles/maps.css'
import GoogleMapReact from 'google-map-react';

const Maps = () => {
    const defaultProps = {
        center: {
          lat: 19.947677858689733,
          lng: -103.76029810674507
        },
        zoom: 15
      };
  return (
    <div className='container'>
        <div className='containerMap'>
        <h2>Mapa</h2>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB_NNiFPgP-2QtwtWa-GFTZ-xoSE336R4Q' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        > */}

        {/* </GoogleMapReact> */}
        </div>
    </div>
  )
}

export default Maps