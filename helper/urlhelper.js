module.exports.locationURI = 'http://ip-api.com/json/'
module.exports.weatherURI = (appid, location) =>{
	return 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + appid + '&units=metric'
} 