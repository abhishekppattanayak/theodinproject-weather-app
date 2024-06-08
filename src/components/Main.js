import MainTemplate from "../templates/main.template"
import ImageContainer from "./Image"
import humidityPng from "../assets/humidity.png"
import rainPng from "../assets/rain.png"
import thermometerPng from "../assets/thermometer.png"
import windPng from "../assets/wind.png"
import { toImperial, toStandard } from "../modules/dataObject"

export default function Main(obj, standard=true) {

  console.log(obj)

  let data;
  if(standard) {
    data = toStandard(obj)
  }else{
    data = toImperial(obj)
  }

  const main = MainTemplate()
  main.classList.add('font-bold', 'text-white', 'flex', 'flex-col', 'items-center', 'gap-2')
  
  const temp = document.createElement('h1')
  temp.innerText = `${data.temp} °${data.tempUnit}`
  temp.classList.add('text-7xl')
  main.appendChild(temp)

  const place = document.createElement('h1')
  place.innerText = data.location.name
  place.classList.add('text-5xl', )
  main.appendChild(place)

  const country = document.createElement('h1')
  country.innerText = data.location.country
  country.classList.add('text-3xl')
  main.appendChild(country)

  const imageList = document.createElement('div')
  imageList.classList.add('flex', 'gap-2', 'flex-wrap', 'justify-center')
  imageList.appendChild(ImageContainer(rainPng, 'rain'))
  imageList.appendChild(ImageContainer(thermometerPng, 'thermometer'))
  imageList.appendChild(ImageContainer(humidityPng, 'humidity'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  imageList.appendChild(ImageContainer(windPng, 'wind'))
  main.appendChild(imageList)

  return main
}