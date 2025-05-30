const apiKey = "e7704bc895b4a8d2dfd4a29d404285b6";
let measurement = "metric";

function choose(choice) {
  measurement = choice;
  updateWeather();
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
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("toggleMode");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    toggleButton.textContent = "Switch to Dark Mode";
    localStorage.setItem("theme", "light-mode");
  }
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const toggleButton = document.getElementById("toggleMode");

  if (savedTheme === "dark-mode") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "Switch to Light Mode";
  } else if (savedTheme === "light-mode") {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "Switch to Dark Mode";
  } else {
    localStorage.setItem("theme", "light-mode");
    body.classList.remove("dark-mode");
    toggleButton.textContent = "Switch to Dark Mode";
  }
}

function updateTime() {
  const now = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekday = weekdays[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `Today is ${weekday}, ${hours}:${minutes}`;
  document.getElementById("current-time").textContent = currentTime;
}

document.getElementById("toggleMode").addEventListener("click", toggleDarkMode);

document.getElementById("f").addEventListener("click", () => choose("imperial"));
document.getElementById("c").addEventListener("click", () => choose("metric"));

loadThemePreference();
updateTime();
setInterval(updateTime, 60000);
