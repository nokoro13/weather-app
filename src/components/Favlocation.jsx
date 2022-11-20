import React from 'react'

function Favlocation() {

    const location = [
        {
            id:1,
            title: 'Vancouver'
        }, 
        {
            id:2,
            title: 'White Rock'
        }, 
        {
            id:3,
            title: 'Kamloops'
        }, 
        {
            id:4,
            title: 'Kelowna'
        }, 
    ]

  return (
    <div className='fav-location'>
        {location.map((locations) => (
            <button key={locations.id}>{locations.title}</button>
        ))}
    </div>
  )
}

export default Favlocation