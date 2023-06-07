import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sections = ({ heading, img, data, borders }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      onClick={() => setDisplay(!display)}
      style={{
        backgroundColor: "rgb(54, 52, 52)",
        cursor: "pointer",
        overflow: "hidden",
        margin: "10px 10%",
        padding: "20px 0",
      }}
    >
      <h2
        style={{
          width: "100%",
          padding: "20px 0",
          margin: "0 20px",
          color: "white",
        }}
      >
        {heading}
      </h2>
      <div
        style={{ display: display ? "flex" : "none", justifyContent: "center" }}
      ><img src={img} style={{ maxHeight: "300px", maxWidth: "300px" }} />
        <h2 style={{ color: "white" }}>{data}</h2>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {borders?.map((borderCountry)=>(
            <Link to={`/countries/${borderCountry}`}><h4 style={{padding:'0 10px'}} className="link" key={borderCountry}>{borderCountry}</h4></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;
