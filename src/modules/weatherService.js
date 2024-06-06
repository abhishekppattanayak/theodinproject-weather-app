export default async function getWeather(place) {
  localStorage.setItem ('lastVisit', JSON.stringify(place))
  
  if(localStorage.getItem(place)) {
    console.log('didnt fetch')
    return JSON.parse(localStorage.getItem(place))
  }

  try{
    console.log('had to fetch')
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WTHR_API_KEY}&q=${place}`, {mode:'cors'})
    
    if(!response.ok) {
      console.log(response)
    }

    let data = await response.json()
    localStorage.setItem(place.toLowerCase(), JSON.stringify(data))
    return data    
  }
  catch (error) {
    alert(`Weather service has faced an error. Click OK to refresh. \n${error}`)
    location.reload()
  }

}