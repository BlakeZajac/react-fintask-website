import React from "react";

const Feature = ({ heading, text, img }) => {
  return (
    <div className="features__items__item">
      <h3>{heading}</h3>
      <p>{text}</p>
      <img src={img} />
    </div>
  );
};

export default Feature;
