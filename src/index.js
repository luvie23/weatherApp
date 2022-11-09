import './style.css';




let cityDOM = document.getElementById('city');
let dateDOM = document.getElementById('date');
let cloudsDOM = document.getElementById('clouds');
let temperatureDOM = document.getElementById('temperature');



async function getWeather(city){
    const response = await fetch(`http://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=${city}`, {mode: 'cors'});
    const gifData = await response.json();
    console.log(gifData);
    cityDOM.textContent = gifData.location.name;
    dateDOM.textContent = gifData.location.localtime;

    cloudsDOM.textContent = gifData.current.weather_descriptions[0];
    temperatureDOM.textContent = `${gifData.current.temperature}°C`



  
    }

document.getElementById('searchButton').addEventListener('click', function (){
    const search = document.getElementById('search');

    getWeather(search.value)
})




getWeather();

