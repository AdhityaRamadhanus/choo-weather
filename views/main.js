const choo = require('choo')
const html = require('choo/html')
module.exports = (state, prev, send) => {
 return html`
  <div class="app" onload= ${() => send('getLocation')}>
    <header class="col-xs-12 text-center">
      <h1>Ch<i class="fa fa-sun-o" aria-hidden="true"></i><i class="fa fa-sun-o" aria-hidden="true"></i> Weather</h1>
      <h1>Local Weather App</h1>
    </header>
    <div class="col-xs-12 location text-center">
      <h2 class="location-text">${state.appLocation}</h2>
      <p class="temperature-text">
        <span class="temperature-span">${state.temp}</span>
        <sup>o</sup><span class="converter" onclick=${(e) => send('convertTemp')}>${state.unit}</span>
        <img class="weather-icon" src="http://openweathermap.org/img/w/${state.icon}.png" alt=""/>
      </p>
      <h2 class="weather-text">${state.weather}</h2>
    </div>
  </div>`
}