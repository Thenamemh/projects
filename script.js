const input = document.querySelector("input");
const button = document.querySelector(".search-btn");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector(".city-temp");
const form = document.querySelector(".form")
const weatherIcon = document.querySelector(".weather-icon");

const converter = (num) => {
    const number = num - 273.15;
    return number;
}

const apiKey = `bd5e378503939ddaee76f12ad7a97608`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (!response.ok) {
    }
        const data = await response.json();
        if (data.cod === 200) {
            cityName.innerText = data.name;
            temperature.innerText = data.main.temp + " °C";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    }
    else{
        alert(data.message)
    }
    return data;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value;
    getWeather(city);
})