import React, { useEffect, useState } from "react";
import Country from "./Country";
import FetchApi from "./FetchApi";
import SearchComponent from "./SearchComponent";
import { ClipLoader   } from 'react-spinners';
import Regions from "./Regions";
import Sorting from "./Sorting";

const CountryList = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    FetchApi("all")
      .then((data) => {
        setAllData(data);
        setCountries(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader   color="#000000" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Regions countries={countries} setCountries={setCountries} allData={allData}/>
      <SearchComponent setCountries={setCountries} allData={allData} />
      <Sorting setCountries={setCountries} allData={allData}/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {countries.length > 0 ? (
          countries.map((country, index) => (
            <Country key={index} country={country} />
          ))
        ) : (
          <h3 style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}>
            No Country
          </h3>
        )}
      </div>
    </div>
  );
};

export default CountryList;
