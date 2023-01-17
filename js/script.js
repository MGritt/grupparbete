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
