import MainTemplate from "../templates/main.template"
import ImageContainer from "./Image"
import humidityPng from "../assets/humidity.png"
import rainPng from "../assets/rain.png"
import thermometerPng from "../assets/thermometer.png"
import windPng from "../assets/wind.png"
import dewpointPng from "../assets/dewpoint.png"
import { toImperial, toStandard } from "../modules/dataObject"

export default function Main(obj, standard=true) {

  let data;
  if(standard) {
    data = toStandard(obj)
  }else{
    data = toImperial(obj)
  }

  const main = MainTemplate()
  main.classList.add('font-bold', 'text-white', 'flex', 'items-center', 'gap-6', 'px-4', 'flex-col', 'lg:flex-row')

  const section = document.createElement('section')
  section.classList.add('lg:w-1/2', 'flex', 'flex-col', 'items-center', 'justify-center')
    
  const temp = document.createElement('h1')
  temp.innerText = `${data.temp} °${data.tempUnit}`
  temp.classList.add('text-7xl')
  section.appendChild(temp)

  const feelslike = document.createElement('h1')
  feelslike.innerText = `Feels like ${data.feelslike} °${data.tempUnit}`
  feelslike.classList.add('text-3xl', 'mb-4')
  section.appendChild(feelslike)

  const place = document.createElement('h1')
  place.innerText = data.location.name
  place.classList.add('text-5xl', 'mt-4')
  section.appendChild(place)

  const country = document.createElement('h1')
  country.innerText = data.location.country
  country.classList.add('text-3xl')
  section.appendChild(country)

  const imageList = document.createElement('div')
  imageList.classList.add('lg:w-1/2','flex', 'gap-2', 'flex-wrap', 'justify-center')
  
  imageList.appendChild(ImageContainer(rainPng, 'Precipation', `${data.precip} ${data.precipUnit}`))
  imageList.appendChild(ImageContainer(thermometerPng, 'Heat index', `${data.heatindex} °${data.tempUnit}` ))
  imageList.appendChild(ImageContainer(humidityPng, 'Humidity', `${data.humidity}%`))
  imageList.appendChild(ImageContainer(windPng, 'Wind speed', `${data.gust} ${data.gustUnit}`))
  imageList.appendChild(ImageContainer(dewpointPng, 'Dew Point', `${data.dewpoint} °${data.tempUnit}`))
  
  
  main.appendChild(section)
  main.appendChild(imageList)

  return main
}