import React from "react";

const Review = ({ text, img, name, title }) => {
  return (
    <div className="reviews__items__item">
      <div className="reviews__items__item__content">
        <p>{text}</p>
      </div>

      <div className="reviews__items__item__wrapper">
        <div className="reviews__items__item__img">
          <img src={img} />
        </div>

        <div className="reviews__items__item__name">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
