export default async function getWeather(place) {

  try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WTHR_API_KEY}&q=${place}`, {mode:'cors'})
    
    let data = await response.json()
    return data    

  }
  catch (error) {
    alert(`Weather service has faced an error. Click OK to refresh. \n${error}`)
    location.reload()
  }

}