import React from "react";
import img from "../../assets/boilerplate/boilerplate-01.png";
import "./boilerplate.scss";

const Boilerplate = () => {
  return (
    <div className="section boilerplate">
      <div className="row">
        <div className="boilerplate__img">
          <img src={img} />
        </div>

        <div className="boilerplate__content">
          <h3>Still have questions?</h3>
          <p>
            If you can't find the answer to your question in our FAQs, you can
            always contact us. We'll answer to you as soon as possible!
          </p>
        </div>

        <div className="boilerplate__newsletter">
          <input type="text" placeholder="Email address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Boilerplate;
