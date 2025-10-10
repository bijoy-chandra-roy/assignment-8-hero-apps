import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appID);

  return (
    <div className="m-20">
      <div className="flex gap-10">
        <img src={singleApp.image} alt="" className="w-90 h-auto" />
        <div className="flex flex-col gap-8 w-full">
          <div className="">
            <h1>{singleApp.title}</h1>
            <p>Developed by {singleApp.companyName}</p>
          </div>
          <hr></hr>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <img src={downloadIcon} alt="" className="w-10" />
              <p>Downloads</p>
              <strong>{singleApp.downloads}</strong>
            </div>
            <div className="flex flex-col  gap-2">
              <img src={ratingIcon} alt="" className="w-10"></img>
              <p>Average Ratings</p>
              <strong>{singleApp.ratingAvg}</strong>
            </div>
            <div className="flex flex-col  gap-2">
              <img src={reviewIcon} alt="" className="w-10" />
              <p>Total Reviews</p>
              <strong>{singleApp.reviews}</strong>
            </div>
          </div>
          <button className="bg-[#00D390] text-white py-4 px-5 w-60 cursor-pointer active:scale-95 transition-transform duration-100">
            Install Now ({singleApp.size} MB)
          </button>
        </div>
      </div>
      <hr className="my-10" />
      <div></div>
      <hr className="my-10" />
      <div>
        <h2>Description</h2>
        <p>{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
