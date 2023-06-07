import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App=React.memo(()=> {
  const [isSwitchOn, setSwitchOn] = useState(true);
  return (
    <div
      className={isSwitchOn ? "App animate1" : "App animate2"}
      style={{
        backgroundColor: isSwitchOn ? "rgb(35, 32, 32)" : "white",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Header isSwitchOn={isSwitchOn} setSwitchOn={setSwitchOn} />
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/countries/:countryName" element={<CountryDetails isSwitchOn={isSwitchOn} />} />
        </Routes>
      </Router>
    </div>
  );
});

export default App;
