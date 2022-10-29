import React from "react";
import Feature from "../../components/feature/Feature";
import feature01 from "../../assets/features/features-01.png";
import feature02 from "../../assets/features/features-02.png";
import feature03 from "../../assets/features/features-03.png";
import "./features.scss";

const Features = () => {
  return (
    <div className="section features">
      <div className="row">
        <div className="features__heading">
          <h2>Features</h2>
        </div>
        <div className="features__items">
          <Feature
            heading="View task progress"
            text="Send scheduling links guests love"
            img={feature01}
          />

          <Feature
            heading="Plan calendar"
            text="Send scheduling links guests love"
            img={feature02}
          />

          <Feature
            heading="Collaborations"
            text="Send scheduling links guests love"
            img={feature03}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
