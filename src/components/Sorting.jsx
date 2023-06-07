import React from 'react'
import Button from './Button'

const Sorting = ({setCountries,allData}) => {
    const sorting=()=>{
        const newData=allData.map(country=>country.name.official).sort()
        const newCountries=[];
        newData.map(name=>{
            allData.map(country=>country.name.official===name &&newCountries.push(country))})
            setCountries(newCountries)
    }
    const sortingReverse=()=>{
        const newData=allData.map(country=>country.name.official).sort()
        const newCountries=[];
        newData.map(name=>{
            allData.map(country=>country.name.official===name &&newCountries.push(country))})
            setCountries(newCountries.reverse())
    }
  return (
    <div style={{display:"flex" ,justifyContent:"center",flexWrap:"wrap"}}>
        <Button text={"A dan Z ye"} func={sorting} value={sorting}/>
        <Button text={"Z den A ya"} func={sortingReverse} value={sortingReverse}/>

    </div>
  )
}

export default Sorting