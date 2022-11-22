// const WEATHER_API = '81879c79f6a165d4c310688276ac01e3';
// const BROWSER_FETCH = 'https://api.openweathermap.org/data/2.5';

// const OpenWeather = (infoType , searchParams) => {
//     const url = new URL(BROWSER_FETCH +  "/" + infoType);
//     url.search = new URLSearchParams({...searchParams, appid:WEATHER_API});

//     return fetch(url)
//     .then((res) => res.json())
//     // .then((data) => data);
// };

// const formatWeather = (data) => {
//     const {
//         coord: {lat, lon},
//         main: {temp, feels_like, temp_min, temp_max, humidity},
//         name,
//         dt,
//         sys: {country, sunrise, sunset},
//         weather, 
//         wind: {speed}
//     } = data

//     const {main: details, icon} = weather[0];

//     return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name,
//         dt, country, sunrise, sunset, details, icon, speed
//     }
// }

// const WeatherData = async (searchParams) => {
//     const formatData = await OpenWeather('weather',searchParams).then(formatWeather);

    
//     return formatData;
// }

// export default WeatherData;