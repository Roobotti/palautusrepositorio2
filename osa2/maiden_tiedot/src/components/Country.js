import React from 'react'


const Country = ([{name, capital, area, languages, flags}, {temp, speed, icon}]) => {
    return (
        <div>
            <h3>{name.common}</h3>
            <p>capital: {capital}</p>
            <p>area: {area}</p>
            <h5>languages:</h5>
            <ul>
                {Object.values(languages).map((language, key) => <li key={key}>{language}</li>)}
            </ul>
            <img src={flags.png} alt="Country flag" style={{width:'150px', height: 'auto'}}></img>
            <h3>Weather in Helsinki</h3>
            <form>
                <b>tempature {temp} Celcius </b>
                <br />
                    <img 
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                        alt="flag" 
                    />
                <br />
                <b>wind {speed} m/s</b>
        </form>
        </div>
    )

}

export default Country