import React from "react";
import Cards from "./Cards";
import { Link } from "react-router";

const TreandingApps = ({ data }) => {
  const topRated = [...data]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);
  return (
    <div className="my-20">
      <h2 className="text-[48px] font-bold text-[#001931] dark:text-white">Trending Apps</h2>
      <p className="text-[20px] font-normal text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      <Cards data={topRated}></Cards>
      <Link
      onClick={() => window.scrollTo(0, 0)}
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        to="/apps"
      >
       Show All
      </Link>
    </div>
  );
};

export default TreandingApps;
