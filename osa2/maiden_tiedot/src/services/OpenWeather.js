import axios from "axios"

const getWeather = ([lat, lon]) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/weather',
        params: {lat:lat, lon:lon}
    }
    
    return axios.request(options)
}


export default getWeather