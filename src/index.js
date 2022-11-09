import './style.css';

let cityDOM = document.getElementById('city');
let dateDOM = document.getElementById('date');
let cloudsDOM = document.getElementById('clouds');
let temperatureDOM = document.getElementById('temperature');

let cloudImg = document.getElementById('cloudImg');

let leftBoard = document.getElementById('leftBoard');

async function getGif(){
    // const response = await fetch('http://api.weatherstack.com/current?access_key=80a89d202f4cbfc3daa8e17233f2e1d2&query=makati', {mode: 'cors'});
    // const gifData = await response.json();
    // console.log(gifData);
    // cityDOM.textContent = gifData.location.name;
    // dateDOM.textContent = gifData.location.localtime;
    // cloudImg.src = gifData.current.weather_icons[0];
    // cloudsDOM.textContent = gifData.current.weather_descriptions[0];
    // temperatureDOM.textContent = `${gifData.current.temperature}°C`

    cityDOM.textContent = 'Makati';
    dateDOM.textContent = '2022-11-09 15:23';
    cloudImg.src = '../src/imgs/clouds.png';
    cloudsDOM.textContent = 'Partly cloudy';
    temperatureDOM.textContent = `32°C`

    setBackground(116);

    }

getGif();



function setBackground(code){
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




// 179	Patchy snow possible
// 182	Patchy sleet possible
// 185	Patchy freezing drizzle possible
// 227	Blowing snow
// 260	Freezing fog
// 281	Freezing drizzle
// 284	Heavy freezing drizzle
// 311	Light freezing rain



// 200	Thundery outbreaks possible

// 230	Blizzard



// 299	Moderate rain at times
// 302	Moderate rain
// 305	Heavy rain at times
// 308	Heavy rain



// 80a89d202f4cbfc3daa8e17233f2e1d2
