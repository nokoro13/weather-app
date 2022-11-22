import React from "react";
import {useState} from 'react';
import { UilSun } from "@iconscout/react-unicons";

function Forecast({ title }) {
  const weatherPath = {base:'https://api.openweathermap.org/data/2.5/', key:'81879c79f6a165d4c310688276ac01e3'};

  // const [city, setCity] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${weatherPath.base}weather?q=${query}&units=metric&APPID=${weatherPath.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day}, ${date} ${month} ${year}`;
  }

//   useEffect(() => {
//     fetch(weatherPath)
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         setCity(data);
//         // setLoaded(true);
//       })
//   }, [weatherPath]);
// console.log(city)

  // const formatData = (data) => {
  //   const {
  //     coord: {lat, lon},
  //     main: {temp, feels_like},
  //     name,
  //     dt,
  //   } = data;
  // }

  return (

  <div className="forecast-container">

    <div className='location-specifics'>

      <p>
        {dateBuilder(new Date())}
      </p>

      <p className='specific-location'>
        {/* {city.name} */}
      </p>

    </div>
<>
      <h2>{title}</h2>
      <ul>
        <li>2:30 pm</li>

        <li>
          <UilSun size={35} />
        </li>

        <li>2°C</li>
      </ul>

      <ul>
        <li>2:30 pm</li>

        <li>
          <UilSun size={35} />
        </li>

        <li>2°C</li>
      </ul>

      <ul>
        <li>2:30 pm</li>

        <li>
          <UilSun size={35} />
        </li>

        <li>2°C</li>
      </ul>

      <ul>
        <li>2:30 pm</li>

        <li>
          <UilSun size={35} />
        </li>

        <li>2°C</li>
      </ul>

      <ul>
        <li>2:30 pm</li>

        <li>
          <UilSun size={35} />
        </li>

        <li>2°C</li>
      </ul>
      </>
    </div>
  );
}

export default Forecast;
