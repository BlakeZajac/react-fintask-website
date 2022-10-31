import React from "react";
import "./pricing.scss";
import icon1 from "../../assets/pricing/pricing-01.png";
import icon2 from "../../assets/pricing/pricing-02.png";
import icon3 from "../../assets/pricing/pricing-03.png";
import PricingCard from "../../components/pricingcard/PricingCard";

const Pricing = () => {
  return (
    <div className="section pricing">
      <div className="row">
        <div className="pricing__heading">
          <h2>Choose a plan that fits your team</h2>
        </div>
        <div className="pricing__items">
          <PricingCard
            icon={icon1}
            planType="Individual"
            price="$9.99"
            duration="per month"
            point1="Unlimited projects and clients"
            point2="Personal desktop activity tracking"
            point3="Maximum of 5 members on your project"
            buttonText="Get started"
          />

          <PricingCard
            icon={icon2}
            planType="Elite"
            price="$12.99"
            duration="per month"
            point1="Everything in Individual"
            point2="Centralised control of labor costs and billable rates for team members"
            point3="Single sign-on (SSO)"
            buttonText="Get started"
          />

          <PricingCard
            icon={icon3}
            planType="Startup"
            price="Contact us"
            duration="for preorder"
            point1="Everything in Elite"
            point2="Manage multiple workspaces under one organization"
            point3="Expert training and assistance"
            buttonText="Contact us"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
