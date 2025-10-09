import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Card = ({ eachApp }) => {
  return (
    <div className="card bg-base-100 shadow-lg p-4">
      <figure>
        <img src={eachApp.image} alt={eachApp.title} className="w-full rounded-[8px]"/>
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title">{eachApp.title}</h2>
        <p>{eachApp.description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline text-[#00D390] bg-[#F1F5E8] rounded-[4px] border-none">
            <MdOutlineFileDownload />
            {eachApp.downloads}
          </div>
          <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1] rounded-[4px] border-none">
            {eachApp.ratingAvg === 5 ? (
              <FaStar />
            ) : eachApp.ratingAvg > 1 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
            {eachApp.ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
