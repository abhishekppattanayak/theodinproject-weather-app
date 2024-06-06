import Header from "./components/Header";
import getWeather from "./modules/weatherService";
import Main from "./components/Main";

export default async function App() {
  const body = document.body 
  body.classList.add('flex', 'flex-col', 'min-h-screen', 'bg-gradient-to-bl', 'from-fuchsia-500', 'to-cyan-500')

  
  body.appendChild(Header())
  
  if(localStorage.getItem('lastVisit')) {
    const lastVisitedCity = JSON.parse(localStorage.getItem('lastVisit'))
    const obj = JSON.parse(localStorage.getItem(lastVisitedCity))
    body.appendChild(Main(obj))
  }
  else{
    const obj = await getWeather('london')
    console.log(obj)
    body.appendChild(Main(obj))
  }
}