import React from "react";
import Button from "../button/Button";
import { AiFillCheckCircle } from "react-icons/ai";
import "./cta.scss";

const CTA = () => {
  return (
    <div className="section cta">
      <div className="row">
        <div className="cta__content">
          <h2>
            Allow your team to be more{" "}
            <span className="orange">productive</span>
          </h2>
          <Button text="Get started for free" color="btn--purple" />
        </div>

        <div className="cta__items">
          <div className="cta__items__item">
            <p>
              <AiFillCheckCircle />{" "}
              <span>
                Try free for <strong>14 DAYS</strong>
              </span>
            </p>
          </div>

          <div className="cta__items__item">
            <p>
              <AiFillCheckCircle /> <span>No card required</span>
            </p>
          </div>

          <div className="cta__items__item">
            <p>
              <AiFillCheckCircle /> <span>No switching banks</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
