import getWeather from "../modules/weatherService"
import Main from "./Main"

export default function Header() {
  const header = document.createElement('header')
  header.classList.add('grow', 'border', 'border-white', 'border-2', 'xl:mx-8', 'lg:mx-4', 'md:mx-2', 'my-2', 'sm:mx-1', 'bg-white/10', 'backdrop-blur-xl', 'rounded-lg', 'flex', 'justify-center', 'items-center')

  const search = document.createElement('input')
  search.classList.add('bg-transparent', 'text-white', 'font-bold', 'text-2xl','placeholder:text-white', 'placeholder:font-bold', 'placeholder:italic', 'bg-gray-200/25', 'hover:bg-gray-200/35', 'p-2', 'rounded-lg')
  search.placeholder = "Search"
  search.addEventListener ('keypress'  , async e => {
    if( e.key === 'Enter' && search.value !== '' ) {
      const res = await getWeather(search.value)
      document.body.removeChild(document.querySelector('main'))
      document.body.appendChild(Main(res))
    }
  })

  header.appendChild(search)

  return header
}