import { standard } from "../global"
import getWeather from "../modules/weatherService"
import ErrorPage from "./ErrorPage"
import Invalid from "./InvalidRes"
import Main from "./Main"

export default function Header() {
  const header = document.createElement('header')
  header.classList.add('grow', 'border', 'border-white', 'border-2', 'xl:mx-8', 'lg:mx-4', 'md:mx-2', 'my-2', 'mx-1', 'bg-white/10', 'backdrop-blur-xl', 'rounded-lg', 'flex', 'justify-evenly', 'items-center', 'py-8', 'flex-wrap', 'items-center', 'gap-4')

  const search = document.createElement('input')
  search.classList.add('bg-transparent', 'text-white', 'font-bold', 'text-2xl','placeholder:text-white', 'placeholder:font-bold', 'placeholder:italic', 'bg-gray-200/25', 'hover:bg-gray-200/35', 'p-2', 'rounded-lg', 'border-2', 'border-white', 'border-b-4')
  search.placeholder = "Search"
  search.addEventListener ('keypress'  , async e => {
    if( e.key === 'Enter' && search.value !== '' ) {
      const res = await getWeather(search.value)
      document.body.removeChild(document.querySelector('main'))
      try {
        // eslint-disable-next-line no-unused-vars
        const cityName = res.location.name
        document.body.appendChild(Main(res, standard.isStandard()))
      }
      catch{
        document.body.appendChild(Invalid(res))
      }
    }
  })


  const btn = document.createElement('button')
  btn.innerText = "Toggle units"
  btn.classList.add('font-bold', 'px-4', 'py-2', 'text-white', 'rounded-lg', 'hover:bg-white/10', 'bg-white/20', 'text-3xl')
  btn.addEventListener('click', ()=>{
    standard.toggleStandard();
    document.body.removeChild(document.querySelector('main'))
    try{
      const obj = JSON.parse(localStorage.getItem('lastVisited'))
      document.body.appendChild( Main(obj, standard.isStandard()) )
    }
    catch {
      document.body.appendChild(ErrorPage())
    }
  })

  header.appendChild(search)
  header.appendChild(btn)

  return header
}