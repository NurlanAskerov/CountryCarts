import React, { useEffect, useState } from 'react'
import FetchApi from './FetchApi'
import { useParams } from 'react-router'
import Sections from './Sections';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


const CountryDetails = React.memo(({isSwitchOn}) => {
    const [loading, setLoading] = useState(true);
    const[country,setCountry]=useState({})
    const param=useParams()
    useEffect(()=>{
    FetchApi(`name/${param.countryName}`).then(data=>setCountry(data[0]))
    setLoading(false)
    },[param])
    
   
  return (
  <>
    <Link style={{textDecoration:'none'}} to="/"><p style={{fontSize:'30px',color:isSwitchOn?'white':'black',textDecoration:'none',margin:'30px'}}>Geri</p></Link>
  { 
   loading? (
    <div className="spinner-container">
    <ClipLoader color="#000000" size={50} />
  </div>
  ) :country?(
    <div style={{padding:'20px 5px',color:isSwitchOn?'white':'black',marginTop:"10px"}}>
     
    <h1 style={{color:'white',padding:'12px 10%',color:isSwitchOn?'white':'black'}}>{country?.name?.official}</h1>
    <Sections heading="Bayrag" img={country?.flags?.png}  />
    <Sections heading="Gerb" img={country?.coatOfArms?.png} />
    <Sections heading="Paytaxt" data={country?.capital} />
    <Sections heading="Ehali" data={country?.population} />
    <Sections heading="Qonsu olkeler" borders={country?.borders}/>
    </div>):(<h2 style={{display:'flex',justifyContent:'center',alignItems:'center',color:'red',padding:"10px",marginTop:"200px"}}>NO COUNTRY</h2>)
}
</>
)
});

export default CountryDetails;