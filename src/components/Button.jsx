import React from "react";

const Button = ({ text,type,func,value,region}) => {
  const handleClick = (e) => {
    func(e,region );
  };
  return (
    <button
      style={{
        padding: "10px 15px",
        margin:'10px 10px',
        backgroundColor: "rgb(54, 52, 52)",
        borderRadius: "10px",
        color: "white",
        cursor:"pointer"
      }}
      type={type}
      disabled={!value}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
