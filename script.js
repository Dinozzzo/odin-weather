const input = document.querySelector("#city");
const form = document.querySelector("form");
const city = document.querySelector("h2");
const temp = document.querySelector("#temp");
const meteo = document.querySelector("#meteo");
const feel = document.querySelector("#feel");
const humidity = document.querySelector("#humidity");
const tempT = document.querySelector("#temp-title");
const meteoT = document.querySelector("#meteo-title");
const feelT = document.querySelector("#feel-title");
const humidityT = document.querySelector("#humidity-title");

// GET INFO FROM API
async function getWeather() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=ZCVASQT97QAJ8KLBMZ7PMRBYX`,
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    alert(error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(input.value);

  const data = await getWeather();
  console.log(data);
  console.log(data.longitude);
  // DISPLAY THE SUBTITLES
  tempT.textContent = "Temperature";
  meteoT.textContent = "Meteo";
  feelT.textContent = "Feels like";
  humidityT.textContent = "Humidity";

  // DISPLAY THE DATA
  city.textContent = data.address;
  temp.textContent = `${data.currentConditions.temp}°F`;
  feel.textContent = `${data.currentConditions.feelslike}°F`;
  humidity.textContent = `${data.currentConditions.humidity}%`;
  console.log(data.humidity);

  // DISPLAY THE METEO ICONS
  console.log(data.currentConditions.icon);

  let icon = meteo.querySelector("img");

  if (!icon) {
    icon = document.createElement("img");
    meteo.appendChild(icon);
  }

  if (data.currentConditions.icon === "partly-cloudy-night") {
    icon.src = "icons/cloudy-night-1.svg";
  }

  if (data.currentConditions.icon === "clear-night") {
    icon.src = "icons/night.svg";
  }

  if (data.currentConditions.icon === "rain") {
    icon.src = "icons/rainy-5.svg";
  }

  if (data.currentConditions.icon === "partly-cloudy-day") {
    icon.src = "icons/cloudy-day-1.svg";
  }
});
