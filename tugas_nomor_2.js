require("dotenv").config();

// Get API key from environment
const apikey = process.env.API_KEY;

const dateToFormal = (date) => {
  // Create Days Name
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Create Month Name
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Get day name based on date day in numeric
  const dayName = days[date.getDay()];
  // Get day from date
  const day = date.getDate();
  // Get month name based on date month in numeric
  const monthName = months[date.getMonth()];
  // Get date year
  const year = date.getFullYear();
  // Concatenate it
  const formattedDate = `${dayName}, ${day} ${monthName} ${year}`;
  // Return the Formal Date
  return formattedDate;
};

const forecast = async () => {
  const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=${apikey}&units=metric`;
  const data = fetch(weatherAPI)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Get weather data
      const forecasts = data.list;

      let forecastData = [];

      // Print the Title
      console.log("Weather Forecast:");
      // Loop through forecast
      for (let i = 0; i < forecasts.length; i += 8) {
        // Every 8th entry is forecast for next day
        const forecast = forecasts[i];
        // Convert Unix timestamp to JavaScript Date object
        const date = new Date(forecast.dt * 1000);
        // Get temperature
        const temperature = forecast.main.temp;

        // Convert Javascript Date object to Formal Date
        const formalDate = dateToFormal(date);

        // Append the data to forecastData
        forecastData.push({ formalDate, temperature });

        console.log(`${formalDate}: ${temperature}°C`);
      }

      return forecastData;
    })
    .catch((error) => {
      console.error("There was a problem fetching the forecast data:", error);
    });

  return data;
  // data Format
  /*
  [
    ...
    {
      formalDate:string,
      temperature:number
    }
    ...
  ]
  */
};

forecast()