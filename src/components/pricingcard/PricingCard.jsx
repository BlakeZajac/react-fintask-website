import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
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
        <p>
          <AiOutlineCheck className="purple" /> <span>{point1}</span>
        </p>
        <p>
          <AiOutlineCheck className="purple" /> <span>{point2}</span>
        </p>
        <p>
          <AiOutlineCheck className="purple" /> <span>{point3}</span>
        </p>
      </div>

      <div className="pricing__items__item__button">
        <Button text={buttonText} color="btn--purple" />
      </div>
    </div>
  );
};

export default PricingCard;
