import React from "react";
import "./reviews.scss";
import Review from "../../components/review/Review";
import headshot1 from "../../assets/reviews/reviews-01.png";
import headshot2 from "../../assets/reviews/reviews-02.png";
import headshot3 from "../../assets/reviews/reviews-03.png";
import headshot4 from "../../assets/reviews/reviews-04.png";
import headshot5 from "../../assets/reviews/reviews-05.png";
import headshot6 from "../../assets/reviews/reviews-06.png";

const Reviews = () => {
  return (
    <div className="section reviews">
      <div className="row">
        <div className="reviews__heading">
          <h2>Loved by product people</h2>
        </div>

        <div className="reviews__items">
          <Review
            text="Fintask is the best!"
            img={headshot1}
            name="Jillian Benbow"
            title="Senior Community Manager"
          />

          <Review
            text="Can't recommend Fintask enough"
            img={headshot2}
            name="Enters JK"
            title="Software Eng. at Bom"
          />

          <Review
            text="I love Fintask! Use it daily too."
            img={headshot3}
            name="Montes Kei"
            title="Developer at CBN"
          />

          <Review
            text="“Hey Fintaskyou all did an amazing job. It's seriously saving me so much time. Screenshots don't disappear right away and I can draw & add arrows to screenshots instantly"
            img={headshot4}
            name="Pilliaf Tom"
            title="Senior Manager"
          />

          <Review
            text="Fintask is one of *the*  nicest, most wonderful, amazing, perfect Mac apps I use fifty+ times a day. Worth every penny."
            img={headshot5}
            name="Jillian"
            title="Community Manager"
          />

          <Review
            text="Have you used Fintask before? When you take a screenshot, it pops up and let's you save it or copy it. Probably one of my favorite pieces of Mac software"
            img={headshot6}
            name="Benbow"
            title="Senior Manager"
          />

          <Review
            text="Fintask is the best!"
            img={headshot1}
            name="Jillian Benbow"
            title="Senior Community Manager"
          />

          <Review
            text="Can't recommend Fintask enough"
            img={headshot2}
            name="Enters JK"
            title="Software Eng. at Bom"
          />

          <Review
            text="I love Fintask! Use it daily too."
            img={headshot3}
            name="Montes Kei"
            title="Developer at CBN"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
