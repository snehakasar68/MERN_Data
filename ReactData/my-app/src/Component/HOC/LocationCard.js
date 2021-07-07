import React from 'react'

const LocationCard = (props) => {
    return (
      <div>
          <hr/>
       <div><p><b>Name:</b> {props.name}</p></div>
       <div><p><b>Zone:</b> {props.zone}</p></div>
       <div><p><b>Region:</b> {props.region}</p></div>
        <hr/>
      
        
        
      </div>
    )
  }

export default LocationCard
