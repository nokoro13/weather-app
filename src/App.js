// import logo from './logo.svg';
import Favlocation from './components/Favlocation';
// import InputFields from './components/InputFields';
// import LocationSpecifics from './components/LocationSpecifics';
import './sass/styles.css';
// import Forecast from './components/Forecast';
import { UilLocationPoint} from '@iconscout/react-unicons';
import { useState } from 'react';
import { UilSun } from "@iconscout/react-unicons";

function App() {


  const weatherPath = {base:'https://api.openweathermap.org/data/2.5/', key:'81879c79f6a165d4c310688276ac01e3'};

  // const [city, setCity] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  // {onecall}
  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${weatherPath.base}weather?q=${query}&units=metric&APPID=${weatherPath.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
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

  // useEffect(()=> {
    
  // })



  return (
    <div className="App">
      <h1>Weather App</h1>
      <Favlocation/>

      <div className='location-search'>

      <input type="text" placeholder='Search location..' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} /> 

      <div className='icons-container'>
        {/* <UilSearch size={35} className='uil-icon'/> */}
        <UilLocationPoint size={35} className='uil-icon'/>
      </div> 

      <div className='met-imp'>
        <button name='metric'>°C</button>
        <button name='imperial'>°F</button>
      </div>

    </div>

    
    <div className='current-weather-container'>

            <ul className='current-weather-list'>
                <li><UilSun size={50}/></li>
                <li>{(typeof weather.main != "undefined" ? Math.round(weather.main.temp) : '0')}°</li>
            </ul>
        
        </div>

    <div className="forecast-container">



<div className='location-specifics'>
  

  <p>
    {dateBuilder(new Date())}
  </p>

  <p className='specific-location'>
    {(typeof weather.main != "undefined" ? weather.name : 'Waiting for location...')}
  </p>

</div>
<>
  <h2>Hourly Forecast</h2>
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
</div>
  );
}

export default App;
