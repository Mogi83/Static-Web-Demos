const NWS_API = " https://api.weather.gov/gridpoints/AKQ/39,39/forecast/hourly?units=us";

fetch(NWS_API)
  .then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error('Network response was not ok');
      }
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    var temp = data.properties.periods[0].temperature;
    document.getElementById("htmltemp").innerHTML = temp;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
