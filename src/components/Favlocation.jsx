import React from 'react'
import { useState } from 'react';

function Favlocation(search) {

    const [fav, setFav] = useState('');

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
            <button prop={fav} onClick={(search) => setFav(locations.title)} key={locations.id}>{locations.title}</button>
        ))}
    </div>
  )
}

export default Favlocation