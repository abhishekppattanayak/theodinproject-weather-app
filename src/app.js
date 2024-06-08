import getWeather from "./modules/weatherService";
import Main from "./components/Main";
import Header from "./components/header";

export default async function App() {

  const body = document.body 
  body.classList.add('flex', 'flex-col', 'min-h-screen', 'from-fuchsia-400', 'to-cyan-400', 'bg-gradient-to-bl')

  const obj = await getWeather('london')

  body.appendChild(Header())
  body.appendChild(Main(obj, true))
}