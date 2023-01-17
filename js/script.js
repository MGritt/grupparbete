const form = document.querySelector('#form');
if (form != null){
  form.addEventListener('submit', function(event){
    event.preventDefault();
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
  console.log(city)
  //weatherApp js
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
        const geoCity = response.results[6].formatted_address.split(',')[0];
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
      weatherApp(city);
  }
}

function handleGEOError(error){
  return error;
}

const userSearchBtn = document.getElementById('btn')
userSearchBtn.addEventListener('click', frontPage)
function frontPage(){
  const userSearchInput = document.getElementById('weather')
  let userSearch = userSearchInput.value
  let firstCity = document.getElementById('firstCity')
  firstCity.innerText = userSearch
  let weatherSearchURL = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=1&appid=920ce113b008fb235bbbe30f64186532
  `
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
      console.log(data)
      // uppdaterar all html till sökningen
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