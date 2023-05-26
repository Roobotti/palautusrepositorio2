import { useState, useEffect } from 'react'
import Content from './components/Content'
import getWeather from './services/OpenWeather'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [chosenCountrys, setChosenContries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [weather, setNewWeather] = useState({
    temp:'',
    speed:'',
    icon:'01d',  //dosent do any, but now no error for empty search
  })

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setAllCountries(response.data)
        })
      .catch(error => console.log(error))
      }, [])
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect( () => {
    setChosenContries(Filter(allCountries, newFilter))
  }, [newFilter])
  
  useEffect( () => {
    if (chosenCountrys.length === 1) {
      console.log('fetching weather data for', chosenCountrys[0].name.common)
      getWeather(chosenCountrys[0].capitalInfo.latlng)
        .then(response => {
          setNewWeather({
            temp:response.data.main.temp, 
            speed:response.data.wind.speed, 
            icon:response.data.weather[0].icon})
        })
        .catch(error => console.log(error))
      }
    }, [chosenCountrys[0]])


  return (
    <div>
      <div>
        find countries <input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <pre>
        <Content chosenCountrys={chosenCountrys} weather={weather} setFilter={setNewFilter}/>
      </pre>
    </div>
  )
}

export default App;
