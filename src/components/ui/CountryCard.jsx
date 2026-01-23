import React from 'react'
import { Link } from "react-router-dom"
const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country
    return (
        <li className='country-card card'>
            <div className='container-card bg-white-box' >
                <img src={flags.svg} alt="" />

                <div className="countryInfo">
                    <p className='card-title'>{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</p>
                    <p>
                        <span className='card-description'>
                            population
                        </span>
                        {population.toLocaleString()}
                    </p>

                    <p>
                        <span className='card-description'>
                            Region
                        </span>
                        {region}
                    </p>

                    <p>
                        <span className='card-description'>
                            capital
                        </span>
                        {capital[0]}
                    </p>

                    <Link  to={`/country/${name.common}`}>
                    <button>Read More</button></Link>
                </div>
            </div>
        </li>
    )
}

export default CountryCard