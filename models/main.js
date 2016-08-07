const choo = require('choo')
const axios = require('axios')
const urlHelper = require('../helper/urlhelper')
module.exports = {
	state : {
		appLocation: 'unknown',
		temp: -1,
		weather: 'unknown',
		icon: '404',
		unit: 'C'
	},
	reducers: {
		updateLocation: (data, state) => ({appLocation: data}),
		updateWeather: (data, state) => ({
				temp: data.main.temp,
				weather: data.weather[0].main,
				icon: data.weather[0].icon
		}),
		convertTemp: (data, state) => {
			const currTemp = state.temp
			const currUnit = state.unit
			return {
				temp: (currUnit === 'C') ? (1.8 * currTemp + 32).toFixed(2) : ((currTemp - 32) / 1.8).toFixed(2),
				unit: (currUnit === 'C') ? 'F' : 'C'
			}
		}
	},
	effects: {
		getLocation: (data, state, send, done) => {
			axios.get(urlHelper.locationURI)
				.then((response) => {
					var location = response.data.city + ',' + response.data.countryCode
					send('updateLocation', location, done)
					// i know, i shouldn't put this free api key here lol
					return axios.get(urlHelper.weatherURI('0982ba4e4e23701872e9d07600de69f5', location))
				})
				.then((response) => {
					send('updateWeather', response.data, done)
				})
				.catch((err) => console.log(err))
		}
	}
}
