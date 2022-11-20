import React from 'react';
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons';

function InputFields() {
  return (
    <div className='location-search'>

      <input type="text" placeholder='Search location..' /> 

      <div className='icons-container'>
        <UilSearch size={35} className='uil-icon'/>
        <UilLocationPoint size={35} className='uil-icon'/>
      </div> 

      <div className='met-imp'>
        <button name='metric'>°C</button>
        <button name='imperial'>°F</button>
      </div>

    </div>
  ) 
}

export default InputFields