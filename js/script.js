//weatherApp api function

//geoFunction
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadCity, handleError);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}

const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?';

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
        let city = response.results[6].formatted_address.split(',')[0];
        let myCity = document.querySelector("#myCity");
        myCity.innerText = city;
      }
    )
    .catch(handleError);
}

function handleError(error){
  return error;
}
