import React, { Suspense } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Item = ({ eachApp, onUninstall }) => {
  return (
    <div className="flex items-center p-4 gap-4 bg-base-100 shadow-lg">
      <figure>
        <Suspense fallback={<span>Loading....</span>}>
          <img
            src={eachApp.image}
            alt={eachApp.title}
            className="w-20 rounded-[8px]"
          />
        </Suspense>
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title text-[20px] font-medium text-[#001931]">
          {eachApp.title}
        </h2>
        <div className="card-actions">
          <div className="badge text-[#00D390] border-none px-0">
            <MdOutlineFileDownload />
            {eachApp.downloads}
          </div>
          <div className="badge text-[#FF8811] border-none">
            {eachApp.ratingAvg === 5 ? (
              <FaStar />
            ) : eachApp.ratingAvg > 1 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
            {eachApp.ratingAvg}
          </div>
          <div className="badge text-[#627382] border-none">
            {eachApp.size} MB
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-[#00D390] text-white py-4 px-5  cursor-pointer active:scale-95 transition-transform duration-100 rounded"
          onClick={() => onUninstall(eachApp.id)}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default Item;
