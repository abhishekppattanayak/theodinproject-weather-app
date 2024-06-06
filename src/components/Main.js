import MainTemplate from "../templates/main.template"

export default function Main(obj) {
  console.log(obj)
  const main = MainTemplate()
  main.classList.add('font-bold', 'text-white', 'flex', 'flex-col', 'items-center', )
  
  const temp = document.createElement('h1')
  temp.innerText = `${obj.current.temp_c} °C`
  temp.classList.add('text-7xl')
  main.appendChild(temp)

  const place = document.createElement('h1')
  place.innerText = obj.location.name
  place.classList.add('text-5xl')
  main.appendChild(place)

  const country = document.createElement('h1')
  country.innerText = obj.location.country
  country.classList.add('text-3xl')
  main.appendChild(country)

  return main
}