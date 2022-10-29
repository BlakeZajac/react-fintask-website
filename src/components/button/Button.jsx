import React from "react";
import "./button.scss";

const Button = ({ text, color }) => {
  return (
    <button type="submit" className={`btn ${color}`}>
      <span className="btn__dot">{text}</span>
    </button>
  );
};

export default Button;
