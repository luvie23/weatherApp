import './style.css';


let countryDOM = document.getElementById('country');
let cityDOM = document.getElementById('city');
let dateDOM = document.getElementById('date');
let cloudsDOM = document.getElementById('clouds');
let temperatureDOM = document.getElementById('temperature');



async function getWeather(city){
    const response = await fetch(`https://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=${city}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    countryDOM.textContent = weatherData.location.country;
    cityDOM.textContent = weatherData.location.name;
    dateDOM.textContent = weatherData.location.localtime;
    cloudsDOM.textContent = weatherData.current.weather_descriptions[0];
    temperatureDOM.textContent = `${weatherData.current.temperature}°C`;

    }

document.getElementById('searchButton').addEventListener('click', function (){
    const search = document.getElementById('search');

    getWeather(search.value);
})

document.getElementById('search').addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        getWeather(search.value)
    }
})


getWeather();

