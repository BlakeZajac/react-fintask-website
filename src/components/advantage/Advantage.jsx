import React from "react";
import Button from "../button/Button";

const Advantage = ({
  heading,
  text,
  icon1,
  icon2,
  iconText1,
  iconText2,
  buttonText,
  img,
}) => {
  return (
    <div className="advantages__items__item">
      <div className="advantages__items__item__content">
        <h2>{heading}</h2>
        <p>{text}</p>

        <div className="advantages__items__item__content__icon">
          <img src={icon1} />
          <p>{iconText1}</p>
        </div>

        <div className="advantages__items__item__content__icon">
          <img src={icon2} />
          <p>{iconText2}</p>
        </div>

        <Button text={buttonText} color="btn--orange" />
      </div>

      <div className="advantages__items__item__image">
        <img src={img} />
      </div>
    </div>
  );
};

export default Advantage;
