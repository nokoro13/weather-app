import React from 'react'
import {UilSun} from '@iconscout/react-unicons';
function CurrentWeather() {
  return (
    <div className='current-weather-container'>
        {/* <div className='the-current-weather'>
            <p>Sunny</p>
        </div> */}
        <div>

            <ul className='current-weather-list'>
                <li><UilSun size={50}/></li>
                <li>2°</li>
            </ul>
        
        </div>
    </div>
  )
}

export default CurrentWeather