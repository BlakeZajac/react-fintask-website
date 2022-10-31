import React from "react";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <input type="text" placeholder="Email address" />
      <button type="button">Subscribe</button>
    </div>
  );
};

export default Newsletter;
