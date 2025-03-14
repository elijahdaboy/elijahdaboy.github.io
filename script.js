const apiKey = "bd5e378503939ddaee76f12ad7a97608";
let measurement = "metric";

function choose(choice) {
  measurement = choice;
}

function updateWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    console.error("City input is empty.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${measurement}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const measureprint = measurement === "imperial" ? "F" : "C";

      document.getElementById("weatherResult").innerHTML = `
        <p>Temperature: ${temperature}${measureprint}</p>
        <p>Weather: ${weatherDescription}</p>
      `;

      const weatherImage = document.getElementById("weather-image");

      if (weatherDescription.includes("clear")) {
        weatherImage.src = "clear-sky.jpg";
      } else if (weatherDescription.includes("rain")) {
        weatherImage.src = "rainy.jpg";
      } else if (weatherDescription.includes("cloud")) {
        weatherImage.src = "cloudy.jpg";
      } else {
        weatherImage.src = "default-weather.jpg";
      }
      weatherImage.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

setInterval(updateWeather, 300000);

document.getElementById("getWeather").addEventListener("click", updateWeather);

const now = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = weekdays[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, "0");

console.log(`Today is ${weekday} and the time is ${hours}:${minutes}.`);
