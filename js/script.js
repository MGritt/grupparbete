const forecastContainer = document.getElementById('forecast')
const form = document.querySelector('#form');
if (form != null){
  form.addEventListener('submit', function(event){
    event.preventDefault();
    document.querySelector('#weatherInfo').classList.remove('hidden');
    search(event);
  });
}
const mobileHeaderOpen = document.querySelector('#mobileHeaderOpen');
  mobileHeaderOpen.addEventListener('click', function(){
    document.querySelector('#mobileHeaderOpen').classList.add('hidden');
    document.querySelector('#mobileHeaderClosed').classList.remove('hidden');
  });
const mobileHeaderClosed = document.querySelector('#mobileHeaderClosed');
mobileHeaderClosed.addEventListener('click', function(){
  document.querySelector('#mobileHeaderOpen').classList.remove('hidden');
  document.querySelector('#mobileHeaderClosed').classList.add('hidden');
});
//get search (city) function and pass city to weatherApp(city) function
function search(event) {
  event.preventDefault();
  let city = document.querySelector('#weather').value;
  weatherApp(city);
  prognosWeather(city);
}
//weatherApp function fetch API & display data for city
function weatherApp(city) {
  document.querySelector('footer').classList.remove('footerAbsolute');
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
      let firstCity = document.querySelector("#wrapper #weatherInfo #firstCity");
      firstCity.innerText = data.name;
      let firstTemp = document.querySelector('#wrapper #weatherInfo #firstTemp')
      let temp = data.main.temp
      firstTemp.innerText = `${temp}c`
      let firstDescription = document.querySelector('#wrapper #weatherInfo #firstDescription')
      let description = data.weather[0].description
      firstDescription.innerText = description;
      let weatherImg = document.querySelector('#wrapper #weatherInfo #weatherImg');
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      let firstHumidity = document.querySelector('#wrapper #weatherInfo #firstHumidity')
      let humidity = data.main.humidity
      firstHumidity.innerText = `Humidity: ${humidity}%`
      let firstWind = document.querySelector('#wrapper #weatherInfo firstWind')
      let wind = data.wind.speed
      firstWind.innerText = `Wind: ${wind}m/s`
    })
  })
}
  let city2 = 'new york';
  weatherSearchURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city2}&limit=1&appid=920ce113b008fb235bbbe30f64186532`
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
      let firstCity = document.querySelector("#cityWrapper #city2 #weatherInfo #firstCity");
      firstCity.innerText = data.name;
      let firstTemp = document.querySelector('#cityWrapper #city2 #weatherInfo #firstTemp')
      let temp = data.main.temp
      firstTemp.innerText = `${temp}c`
      let firstDescription = document.querySelector('#cityWrapper #city2 #weatherInfo #firstDescription')
      let description = data.weather[0].description
      firstDescription.innerText = description;
      let weatherImg = document.querySelector('#cityWrapper #city2 #weatherInfo #weatherImg');
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      let firstHumidity = document.querySelector('#cityWrapper #city2 #weatherInfo #firstHumidity')
      let humidity = data.main.humidity
      firstHumidity.innerText = `Humidity: ${humidity}%`
      let firstWind = document.querySelector('#cityWrapper #city2 #weatherInfo #firstWind')
      let wind = data.wind.speed
      firstWind.innerText = `Wind: ${wind}m/s`
    })
  })

  let city1 = 'london';
  weatherSearchURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city1}&limit=1&appid=920ce113b008fb235bbbe30f64186532`
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
      let firstCity = document.querySelector("#cityWrapper #city1 #weatherInfo #firstCity");
      firstCity.innerText = data.name;
      let firstTemp = document.querySelector('#cityWrapper #city1 #weatherInfo #firstTemp')
      let temp = data.main.temp
      firstTemp.innerText = `${temp}c`
      let firstDescription = document.querySelector('#cityWrapper #city1 #weatherInfo #firstDescription')
      let description = data.weather[0].description
      firstDescription.innerText = description;
      let weatherImg = document.querySelector('#cityWrapper #city1 #weatherInfo #weatherImg');
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      let firstHumidity = document.querySelector('#cityWrapper #city1 #weatherInfo #firstHumidity')
      let humidity = data.main.humidity
      firstHumidity.innerText = `Humidity: ${humidity}%`
      let firstWind = document.querySelector('#cityWrapper #city1 #weatherInfo #firstWind')
      let wind = data.wind.speed
      firstWind.innerText = `Wind: ${wind}m/s`
    })
  })

  let city3 = 'malaga';
  weatherSearchURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city3}&limit=1&appid=920ce113b008fb235bbbe30f64186532`
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
      let firstCity = document.querySelector("#cityWrapper #city3 #weatherInfo #firstCity");
      firstCity.innerText = data.name;
      let firstTemp = document.querySelector('#cityWrapper #city3 #weatherInfo #firstTemp')
      let temp = data.main.temp
      firstTemp.innerText = `${temp}c`
      let firstDescription = document.querySelector('#cityWrapper #city3 #weatherInfo #firstDescription')
      let description = data.weather[0].description
      firstDescription.innerText = description;
      let weatherImg = document.querySelector('#cityWrapper #city3 #weatherInfo #weatherImg');
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      let firstHumidity = document.querySelector('#cityWrapper #city3 #weatherInfo #firstHumidity')
      let humidity = data.main.humidity
      firstHumidity.innerText = `Humidity: ${humidity}%`
      let firstWind = document.querySelector('#cityWrapper #city3 #weatherInfo #firstWind')
      let wind = data.wind.speed
      firstWind.innerText = `Wind: ${wind}m/s`
    })
  })

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
        const geoCity = response.plus_code.compound_code.split(' ')[1].split(',')[0];
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
      prognosWeather(city);
      document.querySelector('footer').classList.remove('footerAbsolute');
  }
}

function handleGEOError(error){
  return error;
}

function prognosWeather(city){
  forecastContainer.innerText = '';
  let weatherSearchURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=920ce113b008fb235bbbe30f64186532
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
    secondSearchURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${citylat}&lon=${citylon}&appid=920ce113b008fb235bbbe30f64186532&units=metric`
    fetch(secondSearchURL).then((response)=> {
      if(response.status >= 200 && response.status < 300){
        return response.json()
      }
      else{
        throw 'fetch failed'
      }
    }
    ).then((data)=>{
      console.log(data)
      for(let i = 0; i < 25; i= i+8){
        console.log(data.list[i])
        let ulEl = document.createElement('ul');
        forecastContainer.append(ulEl);
        let forecast1 = document.createElement('li')
        ulEl.appendChild(forecast1)
        forecast1.innerText = `${data.list[i].dt_txt.split('-')[1]}-${data.list[i].dt_txt.split('-')[2].split(' ')[0]}`
        let forecast2 = document.createElement('li')
        ulEl.appendChild(forecast2)
        forecast2.innerText = `Temperature ${data.list[i].main.temp}c`
        let forecast3 = document.createElement('li')
        ulEl.appendChild(forecast3)
        forecast3.innerText = `Wind ${data.list[i].wind.speed}m/s`
        let forecast4 = document.createElement('li')
        ulEl.appendChild(forecast4)
        forecast4.innerText = `Humidity ${data.list[i].main.humidity}%`
      }
    }
    )
  })}
