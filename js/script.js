const form = document.querySelector('#form');
if (form != null){
  form.addEventListener('submit', function(event){
    event.preventDefault();
    document.querySelector('#weatherInfo').classList.remove('hidden');
    search(event);
  });
}
//get search (city) function and pass city to weatherApp(city) function
function search(event) {
  event.preventDefault();
  let city = document.querySelector('#weather').value;
  weatherApp(city);
}
//weatherApp function fetch API & display data for city
function weatherApp(city) {
  let weatherSearchURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=920ce113b008fb235bbbe30f64186532`
  // hämtar lat lon till staden användaren sökt
  fetch(weatherSearchURL).then((response) => {
    if(response.status >= 200 && response.status < 300){
      return response.json()
    }
    else{
      throw 'fetch failed'
    }
  }
  ).then((data) => {
    let citylon = data[0].lon
    let citylat = data[0].lat
    secondSearchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${citylat}&lon=${citylon}&appid=920ce113b008fb235bbbe30f64186532&units=metric`
    fetch(secondSearchURL).then((response)=> {
      if(response.status >= 200 && response.status < 300){
        return response.json()
      }
      else{
        throw 'fetch failed'
      }
    }).then((data) => {
      // uppdaterar all html till sökningen
      let firstCity = document.querySelector("#firstCity");
      firstCity.innerText = data.name;
      let firstTemp = document.getElementById('firstTemp')
      let temp = data.main.temp
      firstTemp.innerText = `Temp: ${temp}`
      let firstDescription = document.getElementById('firstDescription')
      let description = data.weather[0].description
      firstDescription.innerText = `Description: ${description}`
      let firstHumidity = document.getElementById('firstHumidity')
      let humidity = data.main.humidity
      firstHumidity.innerText = `Humidity: ${humidity}`
      let firstWind = document.getElementById('firstWind')
      let wind = data.wind.speed
      firstWind.innerText = `Wind speed: ${wind}`
    })
  })
}
//geoFunction
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadCity, handleGEOError);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}

const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?';
const myCity = document.querySelector("#myCity");

function loadCity(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    const params = new URLSearchParams({
    latlng: `${lat},${long}`,
    key: 'AIzaSyByjsLY99K-FM9N7Tl6a82jZ8v5lYC7KPw'
    });
    fetch(geoBase+params)
    .then(
      function(response){
        return response.json();
      }
    )
    .then(
      function(response){
        console.log(response);
        const geoCity = response.plus_code.compound_code.formatted_address.split(' ')[1];
        myCity.innerText = geoCity;
        geoWeather();
      }
    )
    .catch(handleGEOError);
}

function geoWeather(){
  const geoPage = document.querySelector('#geoPage');
  if (geoPage != null){
      const city = myCity.innerText;
      document.querySelector('#weatherInfo').classList.toggle('hidden');
      weatherApp(city);
  }
}

function handleGEOError(error){
  return error;
}
