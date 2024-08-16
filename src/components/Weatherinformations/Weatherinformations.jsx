import './WeatherInformations.css'

function WeatherInformations({ weather }) {
    if (!weather || !weather.weather || !weather.weather[0]) {
        return <div></div>;
    }

    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

    console.log(iconUrl);

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={iconUrl} alt="Weather Icon" />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>
            
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidadade: {weather.main.humidity}</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInformations;
