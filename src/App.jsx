// import logo from './logo.svg';
// import Favlocation from './components/Favlocation';
import Footer from './components/Footer';
// import InputFields from './components/InputFields';
// import LocationSpecifics from './components/LocationSpecifics';
import './sass/styles.css';
// import Forecast from './components/Forecast';
import { UilLocationPoint} from '@iconscout/react-unicons';
import { useState } from 'react';
import { UilSun, UilCloud, UilSnowFlake, UilCloudShowersAlt, UilCloudDrizzle } from "@iconscout/react-unicons";

function App() {


  const weatherPath = {base:'https://api.openweathermap.org/data/2.5/', key:'81879c79f6a165d4c310688276ac01e3'};

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // {onecall}
  const search = (evt, favs) => {
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

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude; 
        let lon = position.coords.longitude;

        setQuery ({lat, lon})
      }) 
    }
  }

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
    <main>
    <div className="App">
      <h1>Weather App</h1>
      {/* <Favlocation search={search}/> */}

      <div className='fav-location'>
        {location.map((locations) => (
            <button prop={query} onClick={() => {setQuery(locations.title)}} key={locations.id}>{locations.title}</button>
        ))}
    </div>

      <div className='location-search'>

      <input type="text" placeholder='Search location..' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} /> 

      <div className='icons-container'>
        {/* <UilSearch size={35} className='uil-icon'/> */}
        <button onClick={handleCurrentLocation}><UilLocationPoint size={35} className='uil-icon'/></button>
      </div> 

      <div className='met-imp'>
        <button name='metric'>°C</button>
        <button name='imperial'>°F</button>
      </div>

    </div>

    
    <div className='current-weather-container'>

            <ul className='current-weather-list'>
                {/* <li><UilSun size={64} color={'orange'}/></li> */}
                <li>{(typeof weather.main != "undefined" && weather.weather[0].description === 'overcast clouds' ? <UilCloud size={64}/> : typeof weather.main != "undefined" && weather.weather[0].description === 'snow' ? <UilSnowFlake size={65} color={'dodgerblue'}/> : typeof weather.main != "undefined" && weather.weather[0].description === 'heavy intensity rain' ? <UilCloudShowersAlt  size={65}/> : typeof weather.main != "undefined" && weather.weather[0].description === 'clear sky' ? <UilSun size={65} color={'orange'}/> : typeof weather.main != "undefined" && weather.weather[0].description === 'light rain' ? <UilCloudDrizzle size={65} color={'dodgerblue'}/> : typeof weather.main != "undefined" && weather.weather[0].description === 'drizzle rain' ? <UilCloudDrizzle size={65} color={'dodgerblue'}/> : <UilCloud size={65}/>)}</li>

                <li className='currently'>{(typeof weather.main != "undefined" ? weather.weather[0].description : 'Currently')}</li>
                <li>{(typeof weather.main != "undefined" ? Math.round(weather.main.temp) : '0')}°</li>
            </ul>
        <div className='bar'></div>
        </div>

    <div className={(typeof weather.main == "undefined" ?  'forecast-container' : 'forecast-container-next')}>
      
      {/* "forecast-container" */}



<div className='location-specifics'>
  

  <p>
    {dateBuilder(new Date())}
  </p>

  <p className='specific-location'>
    {(typeof weather.main != "undefined" ? weather.name + `, ` + weather.sys.country : 'Waiting for location...')}
  </p>

    <p>{ (typeof weather.main != "undefined" ? `Latitude: ` + weather.coord.lat + `, Longitude: ` + weather.coord.lon : 'Waiting for coordinates...') }</p>

</div>
</div>
<Footer/>
</div>
</main>
  );
}

export default App;
