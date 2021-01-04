const api = {
    base:"https://api.openweathermap.org/data/2.5/",
    key: "c9e5dded9c44f7dfd3e90c28beaa10c6"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(event){
    if (event.keyCode == 13){
        getResult(searchbox.value);
    }
}
 function getResult(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
     .then(weather =>{
         return weather.json();
     }).then(displayResult);
 }

 function displayResult (weather){
     let city = document.querySelector('.location .city');
     city.innerText = `${weather.name}, ${weather.sys.country}`;

    
     let temp = document.querySelector('.current .temp');
     temp.innerText = `${Math.round(weather.main.temp)}°c`;

     let weather_element = document.querySelector('.current .weather');
     weather_element.innerText = weather.weather[0].main;
 }

