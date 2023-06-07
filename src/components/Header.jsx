import React from 'react';
import { BsSun,BsMoon } from "react-icons/bs";
import Switch from 'react-toggle-switch';
import 'react-toggle-switch/dist/css/switch.min.css';
const Header = ({ isSwitchOn, setSwitchOn }) => {
    const handleSwitchChange = () => {
      setSwitchOn(!isSwitchOn);
    };
  
    return (
      <div className="header"style={{backgroundColor:isSwitchOn?"rgb(54, 52, 52)":"rgb(227, 227, 227)"}} >
        <div style={{ fontSize: '30px', color: isSwitchOn ? 'white' : 'black' }}>
          <BsSun  style={{ margin: '0 20px' }} />
          <Switch onClick={handleSwitchChange} on={isSwitchOn} />
          <BsMoon style={{ margin: '0 20px' }} />
        </div>
      </div>
    );
  };
  
  export default Header;

  
  
  