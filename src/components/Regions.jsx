import React from 'react'
import Button from './Button'
import FetchApi from './FetchApi'

const Regions = ({allData,countries,setCountries}) => {
  console.log(countries,setCountries)
  const regions=[...new Set(allData.map(country=>country.region))]
  console.log(regions)
  const handleButton=(e,region)=>{
    FetchApi(`region/${region}`).then(data=>setCountries(data))
  }
    return (
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
       {
        regions.map(region=>(
            <Button key={region} text={region} func={handleButton} value={region} region={region} />
        ))
       }
    </div>
  )
}

export default Regions