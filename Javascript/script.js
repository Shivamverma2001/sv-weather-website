
async function fetchWeatherData(city) {
      const apiKey = '337d7ac9737b1ef4b4faf57281898449';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API call was successful
		  if (response.ok) {
			console.log(data)
        } else {
          // Handle the error case
          console.error('Weather data not available:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    // Call the function with the desired city
    fetchWeatherData('Seattle');