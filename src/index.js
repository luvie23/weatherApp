import './style.css';

let cityDOM = document.getElementById('city');
let dateDOM = document.getElementById('date');
let cloudsDOM = document.getElementById('clouds');
let temperatureDOM = document.getElementById('temperature');

let cloudImg = document.getElementById('cloudImg');

async function getGif(){
    const response = await fetch('http://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=makati', {mode: 'cors'});
    const gifData = await response.json();
    console.log(gifData);
    cityDOM.textContent = gifData.location.name;
    dateDOM.textContent = gifData.location.localtime;
    cloudImg.src = gifData.current.weather_icons[0];
    cloudsDOM.textContent = gifData.current.weather_descriptions[0];
    temperatureDOM.textContent = `${gifData.current.temperature}°C`
    

    }

getGif();



// 80a89d202f4cbfc3daa8e17233f2e1d2

