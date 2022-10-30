import React from "react";
import Button from "../button/Button";

const PricingCard = ({
  icon,
  planType,
  price,
  duration,
  point1,
  point2,
  point3,
  buttonText,
}) => {
  return (
    <div className="pricing__items__item">
      <div className="pricing__items__item__img">
        <img src={icon} />
      </div>

      <div className="pricing__items__item__type">
        <p>{planType}</p>
      </div>

      <div className="pricing__items__item__price">
        <p>{price}</p>
      </div>

      <div className="pricing__items__item__duration">
        <p>{duration}</p>
      </div>

      <div className="pricing__items__item__list">
        <ul>
          <li>{point1}</li>
          <li>{point2}</li>
          <li>{point3}</li>
        </ul>
      </div>

      <div className="pricing__items__item__button">
        <Button text={buttonText} color="btn--purple" />
      </div>
    </div>
  );
};

export default PricingCard;
