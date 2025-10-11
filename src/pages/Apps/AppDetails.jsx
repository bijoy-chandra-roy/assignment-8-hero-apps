import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  getInstalledApps,
  addToInstalledApps,
} from "../../utilities/installApp";
import { convertCountToNumber } from "../../utilities/convertCountToNumber";

const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appID);
  const [installedApps, setInstalledApps] = useState(getInstalledApps());
  const isInstalled = installedApps.includes(singleApp.id);

  return (
    <div className="m-20">
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="w-64 md:w-80 flex-shrink-0">
          <img
            src={singleApp.image}
            alt=""
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="">
            <h1 className="text-[32px] font-bold text-[#001931] dark:text-white">
              {singleApp.title}
            </h1>
            <p className="text-[20px] font-normal">
              Developed by{" "}
              <span className="text-[20px] font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                {singleApp.companyName}
              </span>
            </p>
          </div>
          <hr></hr>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <img src={downloadIcon} alt="" className="w-10" />
              <p className="text-[16px] font-normal">Downloads</p>
              <strong className="text-[40px] font-extrabold">
                {singleApp.downloads}
              </strong>
            </div>
            <div className="flex flex-col  gap-2">
              <img src={ratingIcon} alt="" className="w-10"></img>
              <p className="text-[16px] font-normal">Average Ratings</p>
              <strong className="text-[40px] font-extrabold">
                {singleApp.ratingAvg}
              </strong>
            </div>
            <div className="flex flex-col  gap-2">
              <img src={reviewIcon} alt="" className="w-10" />
              <p className="text-[16px] font-normal">Total Reviews</p>
              <strong className="text-[40px] font-extrabold">
                {singleApp.reviews}
              </strong>
            </div>
          </div>
          <button
            onClick={() => {
              addToInstalledApps(singleApp.id); // this will handle toast internally
              if (!isInstalled) {
                setInstalledApps(getInstalledApps());
              }
            }}
            className={`py-4 px-5 w-60 text-[20px] font-semibold transition-transform duration-100 ${
              isInstalled
                ? "bg-gray-400 text-white cursor-default"
                : "bg-[#00D390] text-white cursor-pointer active:scale-95"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${singleApp.size} MB)`}
          </button>
        </div>
      </div>
      <hr className="my-10" />
      <div>
        <h2 className="text-[24px] font-semibold text-[#001931] mb-6 dark:text-white">
          Ratings
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...singleApp.ratings].reverse().map((rating) => ({
              name: rating.name,
              count: convertCountToNumber(rating.count),
            }))}
            layout="vertical"
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 60,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="0" stroke="transparent" />
            <XAxis
              type="number"
              domain={[0, 12000]}
              ticks={[0, 3000, 6000, 9000, 12000]}
            />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF9500" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr className="my-10" />
      <div>
        <h2 className="text-[24px] font-semibold text-[#001931] mb-6 dark:text-white">
          Description
        </h2>
        <p className="text-[20px] font-normal text-[#627382]">
          {singleApp.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
