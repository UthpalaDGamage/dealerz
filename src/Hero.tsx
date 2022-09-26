import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faPhone } from "@fortawesome/free-solid-svg-icons";
import hero from "./hero.svg"
export const Hero = () => {
  return (
    <>
      <div className="wrapper hero">
        <img src={hero} alt="hero background with circles" />
        <div className="inner-wrapper">
          <div className="content">
            <p className="heading">Your Premium Sound, Unplugged!</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className="btn">Find out More</button>
          </div>
        </div>
      </div>
    </>
  );
};
