import React from "react";
import Button from "../../components/button/Button";
import Advantage from "../../components/advantage/Advantage";
import icon1 from "../../assets/advantages/advantages-02.png";
import icon2 from "../../assets/advantages/advantages-03.png";
import img1 from "../../assets/advantages/advantages-04.png";
import icon3 from "../../assets/advantages/advantages-05.png";
import icon4 from "../../assets/advantages/advantages-06.png";
import img2 from "../../assets/advantages/advantages-07.png";
import img3 from "../../assets/advantages/advantages-08.png";
import "./advantages.scss";

const Advantages = () => {
  return (
    <div className="section advantages">
      <div className="row">
        <div className="advantages__heading">
          <h2>A task manager you can trust for all teams</h2>
          <p>
            Plan projects, stay on track, and deliver on time without
            overworking your team.
          </p>
        </div>
        <div className="advantages__button">
          <Button text="Get started" color="btn--purple" />
        </div>

        <div className="advantages__items">
          <Advantage
            heading="Simple to use, powerful when you need"
            text="Create tasks and projects, upload files, and add comments. With Teamwork everything is in one central location."
            icon1={icon1}
            iconText1="Costumized your workflow"
            icon2={icon2}
            iconText2="Extra features for complex projects"
            img={img1}
          />

          <Advantage
            heading="Take complex projects with ease"
            text="Use status features updates to see how your project is progressing and what's left to do."
            icon1={icon3}
            iconText1="Keep everyone accountable"
            icon2={icon4}
            iconText2="Make sure your status"
            img={img2}
          />

          <Advantage
            heading="Integrations"
            text="Connect Fintask with all the favorite tools you've already use."
            img={img3}
            buttonText="Explore integrations"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
