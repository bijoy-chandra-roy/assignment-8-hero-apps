import React from "react";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <img src={hero} alt="" className="mx-auto" />
    </div>
  );
};

export default Banner;
