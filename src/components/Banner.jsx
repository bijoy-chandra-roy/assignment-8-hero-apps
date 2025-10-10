import React from "react";
import hero from "../assets/hero.png";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";

const Banner = () => {
  return (
    <div>
      <div className="hero mt-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-[72px] font-bold">
              We Build <br />
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="mt-4 py-6y text-[20px] font-normal text-[#627382]">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="my-10 flex gap-4 justify-center">
              <button className="btn btn-neutral btn-outline">
                <img src={playStore} alt="" className="h-8/12" />
                Google Play
              </button>
              <button className="btn btn-neutral btn-outline">
                <img src={appStore} alt="" className="h-8/12" />
                App Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={hero} alt="" className="mx-auto" />
    </div>
  );
};

export default Banner;
