const apiKey = "bd5e378503939ddaee76f12ad7a97608";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  forecastUrl = `api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}`
  fetch(forecastUrl)
  let data = await res.json();
      console.log("data", data);

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      const resultDiv = document.getElementById("weatherResult");
      resultDiv.innerHTML = `
        <p>Temperature: ${temperature}°F</p>
        <p>Weather: ${weatherDescription}</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});
weekday = "?";
const now = new Date();
const day = now.getDay();
const hours = now.getHours();
minutes = now.getMinutes();
console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);
if (day == 0) {
  weekday = "Sunday";
}
if (day == 1) {
  weekday = "Monday";
}
if (day == 2) {
  weekday = "Tuesday";
}
if (day == 3) {
  weekday = "Wednesday";
}
if (day == 4) {
  weekday = "Thursday";
}
if (day == 5) {
  weekday = "Friday";
}
if (day == 6) {
  weekday = "Saturday";
}
if (minutes == 1) {
  minutes = "01";
}
if (minutes == 2) {
  minutes = "02";
}
if (minutes == 3) {
  minutes = "03";
}
if (minutes == 4) {
  minutes = "04";
}
if (minutes == 5) {
  minutes = "05";
}
if (minutes == 6) {
  minutes = "06";
}
if (minutes == 7) {
  minutes = "07";
}
if (minutes == 8) {
  minutes = "08";
}
if (minutes == 9) {
  minutes = "09";
}
if (minutes == 0){
  minutes = "00"
}
