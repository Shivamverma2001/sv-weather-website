fetchWeatherData('Seattle');
async function fetchWeatherData(city) {
      const apiKey = '337d7ac9737b1ef4b4faf57281898449';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API call was successful
		  if (response.ok) {
        console.log(data.main)
        cityName.innerHTML = city
        feels_like_main.innerHTML=data.main.feels_like
        feels_like.innerHTML=data.main.feels_like
        humidity.innerHTML = data.main.humidity
        pressure_main.innerHTML=data.main.humidity
        pressure.innerHTML = data.main.humidity
        temp_main.innerHTML=data.main.temp
        temp.innerHTML=data.main.temp
        temp_max.innerHTML=data.main.temp_max
        temp_min.innerHTML = data.main.temp_min
        } else {
          // Handle the error case
          console.error('Weather data not available:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    // Call the function with the desired city

    
search.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeatherData(city.value);
  setInterval(() => {
    fetchWeatherData(city.value);
  }, 1 * 60 * 1000); // 10 minutes in milliseconds
})
function populateWeatherDetails(city, weatherData) {
    document.getElementById(`${city.toLowerCase()}_feels_like`).textContent = weatherData.feels_like;
    document.getElementById(`${city.toLowerCase()}_humidity`).textContent = weatherData.humidity;
    document.getElementById(`${city.toLowerCase()}_pressure`).textContent = weatherData.pressure;
    document.getElementById(`${city.toLowerCase()}_temp`).textContent = weatherData.temp;
    document.getElementById(`${city.toLowerCase()}_temp_max`).textContent = weatherData.temp_max;
    document.getElementById(`${city.toLowerCase()}_temp_min`).textContent = weatherData.temp_min;
  }

  // Function to fetch weather data for a city and update the table
  async function fetchAndShowWeatherData(city) {
    const apiKey = '337d7ac9737b1ef4b4faf57281898449'; // Replace this with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Check if the API call was successful
      if (response.ok) {
        console.log(data.main);
        populateWeatherDetails(city, {
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min
        });
      } else {
        // Handle the error case
        console.error('Weather data not available:', data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  // Function to fetch weather data for multiple cities
  async function fetchWeatherDataForOtherCities(cities) {
    for (const city of cities) {
      await fetchAndShowWeatherData(city);
    }
  }

  // Call the function to fetch and display weather data for the specified cities
  const cities = ['Lucknow', 'Chandigarh', 'Bangalore', 'Pune', 'Yamunanagar', 'Phagwara'];
  fetchWeatherDataForOtherCities(cities);

  // Automatically update weather data every 10 minutes (adjust the interval as desired)
  setInterval(() => {
    fetchWeatherDataForOtherCities(cities);
  }, 1 * 60 * 1000); // 10 minutes in
  
 async function fetchAndShowWeatherDataForSelectedCity(selectedCity) {
    await fetchWeatherData(selectedCity);
  }

  // Event listener to call the function when a dropdown item is clicked
  document.querySelectorAll('.cityDropdown .d').forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedCity = event.target.textContent;
      fetchAndShowWeatherDataForSelectedCity(selectedCity);
    });
  });