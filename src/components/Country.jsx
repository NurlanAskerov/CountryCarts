import React from 'react';
import { Link } from 'react-router-dom';

const Flag = ({country}) => {
  return (
    <div className='flagCart'>
      <Link className='link' to={`countries/${country?.name?.common}`}>
        <img src={country?.flags?.png} style={{height:'200px',width:'300px',border:'black solid 1px',borderRadius:'15px'}}/>
        <div style={{padding:'8px'}}>
        <h2 style={{textDecoration:"none!important"}}>{country?.name?.official}</h2>
        <p style={{color:'gray'}}>Region:{country?.region}</p>
        </div></Link>
    </div>
  )
}

export default Flag