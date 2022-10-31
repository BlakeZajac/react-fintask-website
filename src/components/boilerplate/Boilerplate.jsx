import React from "react";
import img from "../../assets/boilerplate/boilerplate-01.png";
import Newsletter from "../../components/newsletter/Newsletter";
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

        <Newsletter />
      </div>
    </div>
  );
};

export default Boilerplate;
