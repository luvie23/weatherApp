import './style.css';




let cityDOM = document.getElementById('city');
let dateDOM = document.getElementById('date');
let cloudsDOM = document.getElementById('clouds');
let temperatureDOM = document.getElementById('temperature');


let leftBoard = document.getElementById('leftBoard');

function getGif(){
    // const response = await fetch('http://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=makati', {mode: 'cors'});
    // const gifData = await response.json();
    // console.log(gifData);
    // cityDOM.textContent = gifData.location.name;
    // dateDOM.textContent = gifData.location.localtime;
    // cloudImg.src = gifData.current.weather_icons[0];
    // cloudsDOM.textContent = gifData.current.weather_descriptions[0];
    // temperatureDOM.textContent = `${gifData.current.temperature}°C`

    cityDOM.textContent = 'Makati';
    dateDOM.textContent = '2022-11-09 Local Time 15:23';

    cloudsDOM.textContent = 'Partly cloudy';
    temperatureDOM.textContent = `32°C`

    setBackground(200);

    }


//change background based on the weather code, grouped by similarities
function setBackground(code){
    document.body.style.backgroundSize = '100% 100%'
    if (code == 113){
        document.body.style.backgroundImage = "url('../src/imgs/sunny.jpg')";
    }else if (code == 116 || code == 119){
        document.body.style.backgroundImage = "url('../src/imgs/cloudy.jpg')";
    }else if (code == 122){
        document.body.style.backgroundImage = "url('../src/imgs/overcast.jpg')";
    }else if (code == 143 || code == 248){
        document.body.style.backgroundImage = "url('../src/imgs/mist.jpg')";
    }else if (code == 176 || code == 263 || code == 266 || code == 293 || code == 296){
        document.body.style.backgroundImage = "url('../src/imgs/lightrain.jpg')";
    }else if (code == 299 || code == 302 || code == 305 || code == 308){
        document.body.style.backgroundImage = "url('../src/imgs/heavyrain.jpg')";
    }else if (code == 200){
        document.body.style.backgroundImage = "url('../src/imgs/thundery.jpg')";
    }else if (code == 230){
        document.body.style.backgroundImage = "url('../src/imgs/blizzard.jpg')";
    }else{
        document.body.style.backgroundImage = "url('../src/imgs/snow.jpg')";
    }
}


getGif();

