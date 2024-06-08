function WeatherReport (location, dewpoint, feelslike, gust, gustUnit,humidity, precip, precipUnit, temp, tempUnit) {
  return {location, dewpoint, feelslike, gust, gustUnit, humidity, precip, precipUnit, temp, tempUnit }
}

function toStandard(obj) {
  return WeatherReport(obj.location, obj.current.dewpoint_c, obj.current.feelslike_c, obj.current.gust_kph, 'kph', obj.current.humidity, obj.current.precip_mm, 'mm', obj.current.temp_c, 'C')
}

function toImperial(obj) {
  return WeatherReport(obj.location, obj.current.dewpoint_f, obj.current.feelslike_f, obj.current.gust_mph, 'mph', obj.current.humidity, obj.current.precip_in, 'in', obj.current.temp_f, 'F')
}

export {toStandard, toImperial}