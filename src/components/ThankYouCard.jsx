import React from "react";
import Card from "./Card";

import "./ThankYouCard.css";

import thankyouImg from "../images/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  return (
    <Card>
      <div className="thank_you_img">
        <img src={thankyouImg} alt="" />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5 Thank you! </p>
      </div>

      <h2 className="title">Thank You!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default ThankYouCard;
