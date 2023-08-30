const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 120;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

$(function(){
  toastr.success("Move your mouse plz :D !!", "HI !!"); /*for caution message*/
})

const clockElement = document.getElementById('clock');
const toggleSwitch = document.getElementById('toggle');
let isDarkTheme = false;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const day = now.toLocaleString('en-us', { weekday: 'long' });
  const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.innerHTML = `
    <div>${day}</div>
    <div>${date}</div>
    <div>${timeString}</div>
  `;
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);
  updateClock();
}

// Initialize clock and toggle switch
updateClock();
toggleSwitch.addEventListener('change', toggleTheme);
setInterval(updateClock, 1000);
async function getCityTemperature() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    const city = data.city;
    const apiKey = "c07857538fffb700a1d46f5fb441468d";
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.main.temp;
    return temperature;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

async function displayTemperature() {
  const temperatureElement = document.getElementById("temperature");
  const temperature = await getCityTemperature();

  if (temperature !== null) {
    temperatureElement.textContent = `${temperature}°C`;
  } else {
    temperatureElement.textContent = "Failed to fetch temperature.";
  }
}

displayTemperature();
