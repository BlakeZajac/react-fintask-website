import React from "react";
import hero01 from "../../assets/hero/hero-01.png";
import hero02 from "../../assets/hero/hero-02.png";
import hero03 from "../../assets/hero/hero-03.png";
import hero04 from "../../assets/hero/hero-04.png";
import hero05 from "../../assets/hero/hero-05.png";
import dashboard from "../../assets/dashboard/dashboard-01.png";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../button/Button";
import "./hero.scss";
import "../../components/button/button.scss";

const Hero = () => {
  return (
    <div className="section hero">
      <div className="row hero__row">
        <div className="hero__content">
          <h1>
            Manage your{" "}
            <span className="hero__content__image">
              <img src={hero01} />
            </span>
            team's <br />
            <span className="hero__content__image">
              <img src={hero02} />
            </span>
            <span className="orange">productivity</span>
          </h1>
          <p>
            Plan projects, stay on track, and deliver on time without
            overworking your team.
          </p>
        </div>

        <div className="hero__content__button">
          <Button text="Get started" color="btn--purple" />
        </div>

        <div className="hero__content small">
          <AiFillCheckCircle />
          <p>Excellent 4.9 out of 5</p>
          <img src={hero05} />
        </div>

        <div className="hero__content__image left">
          <img src={hero03} />
        </div>

        <div className="hero__content__image right">
          <img src={hero04} />
        </div>

        <div className="hero__dashboard">
          <div className="hero__dashboard__image">
            <img src={dashboard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
