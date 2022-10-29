import React from "react";
import notion from "../../assets/brands/brand-01.png";
import calendar from "../../assets/brands/brand-02.png";
import trello from "../../assets/brands/brand-03.png";
import slack from "../../assets/brands/brand-04.png";
import outlook from "../../assets/brands/brand-05.png";
import "./brand.scss";

const Brand = () => {
  return (
    <div className="section brand">
      <div className="row brand__row">
        <div className="brand__logos">
          <img src={notion} />
          <img src={calendar} />
          <img src={trello} />
          <img src={slack} />
          <img src={outlook} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
