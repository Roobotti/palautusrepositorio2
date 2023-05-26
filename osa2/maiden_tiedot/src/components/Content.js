import React from 'react'
import Country from "./Country"

const Content = ({chosenCountrys, weather, setFilter}) => {
    if (chosenCountrys){
        if (chosenCountrys.length > 10) {
            return (
            <p>
                Too many matches, specify another filter
            </p>
            )
        }

        if (chosenCountrys.length === 1) {
            return Country([chosenCountrys[0], weather])
        }

        return (
            <ul>
                {chosenCountrys.map((country, i) =>
                    <li key={i}> {country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button></li>
                )}
            </ul>
            )
        }  
    }
export default Content