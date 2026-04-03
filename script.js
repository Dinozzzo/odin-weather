const input = document.querySelector("#city");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  async function getWeather() {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=ZCVASQT97QAJ8KLBMZ7PMRBYX`,
      );
      const weatherData = await response.json();
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }
  }
  getWeather();
});
