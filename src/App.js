// import logo from './logo.svg';
import Favlocation from './components/Favlocation';
import InputFields from './components/InputFields';
import LocationSpecifics from './components/LocationSpecifics';
import CurrentWeather from './components/CurrentWeather';
import './sass/styles.scss';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Favlocation/>
      <InputFields/>
      
      <LocationSpecifics/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
