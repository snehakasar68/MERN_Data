import React, { Component } from 'react'
import LocationCard from './LocationCard'
import WithSearch from './WithSearch'
const Location=(props)=>{
    const  preload = {
        "data": [
          {
            "name": "Ojo",
            "zone": "Lagos State",
            "region": "South West"
          },
          {
            "name": "Ahiazu Mbaise",
            "zone": "Imo State",
            "region": "South East"
          },
          {
            "name": "Akoko-Edo",
            "zone": "Edo State",
            "region": "South South"
          },
          {
            "name": "Anka",
            "zone": "Zamfara State",
            "region": "North West"
          },
          {
            "name": "Akwanga",
            "zone": "Nasarawa State",
            "region": "North Central"
          }
        ]
      }

    const {serachItem}=props
        return (
            <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
      </div>
      <div>
        {preload.data
          // Filter locations by the inputted search term
          .filter(location => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(serachItem.toUpperCase()) >= 0)
          // Loop through the locations
          .map(location => <LocationCard key={location.id} {...location} />)}
      </div>
    </div>
        )
    
}

export default WithSearch(Location)
