import React, { useEffect, useState, useTransition } from 'react'
import { getcountryData } from '../api/PostApi'
import CountryCard from '../components/ui/CountryCard'
import SearchFilter from '../components/ui/SearchFilter'
const Country = () => {

  const [ispending, startTransitioon] = useTransition()
  const [Country, setCountry] = useState([])
  const [Search, setSearch] = useState()
  const [filter, setfilter] = useState("all")
  useEffect(() => {
    startTransitioon(async () => {
    const res =   await getcountryData()
    setCountry(res.data)
      console.log(res);
      
    })
  }, [])
  if(ispending){
     
    return <h1>loading...</h1>
  }


// filering logic
const searchCountry = (el)=>{
    if(Search){
      return el.name.common.toLowerCase().includes(Search.toLowerCase() )
    }
    return el
}
// region
const filerRegion = (el)=>{
  if(filter === "all"){
    return el
  }
  return el.region === filter
}


 const filterCountries =  Country.filter( (el)=>{
   return searchCountry(el) && filerRegion(el)
})

  return (
    <section className='country-section'>
      <SearchFilter search={Search} setSearch= {setSearch} filter = {filter} setFilter = {setfilter} countries = {Country} setCountries  = {setCountry} />
      <ul className='grid grid-four-cols'>
    {filterCountries.map( (currCountry,idx)=>{
        return <CountryCard country={currCountry} key={idx}/>
    } )}
      </ul>
    </section>
  )
}

export default Country