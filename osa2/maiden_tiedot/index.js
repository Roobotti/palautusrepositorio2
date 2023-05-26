const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/weather', (req,res) => {
    const lat = req.query.lat
    const lon = req.query.lon

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}` 
    axios.get(url)
        .then((response) => { res.json(response.data) })
        .catch((error) => {console.error(error)})
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))