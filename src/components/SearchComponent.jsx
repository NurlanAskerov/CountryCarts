import React, { useState } from "react";
import Button from "./Button";
const SearchComponent = ({ setCountries,allData }) => {
    const [value, setValue] = useState("");
  const handleInput = (e) => {
   
    setValue(e.target.value.toString());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtrelenmisArray = allData.filter((country) => {
      return country.name.official.toLowerCase().includes(value.toLowerCase());
      
    });
    setValue('')
    console.log(value)
    setCountries(filtrelenmisArray);
  };
  const text = "Search";
  return (
    <form
       onSubmit={(e)=>handleSearch()}
      style={{
        overflow:'hidden',
        position:'sticky',
        top:'60px'
      }}
    >
      <div style={{width:'100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
       
        backgroundColor:'rgb(35, 32, 32)'
        }}>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        style={{
          borderRadius: "10px",
          padding: "10px",
          width: "25%",
          minWidth: "250px",
          height: "100%",
          marginRight: "5px",
        }}
      />
      <Button text={text} type={"submit"} func={handleSearch} value={value}/>
      </div>
    </form>
  );
};

export default SearchComponent;
