import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../utilities/installApp";
import List from "./../../components/List";
import { toast } from "react-toastify";
import { convertCountToNumber } from "../../utilities/convertCountToNumber";

const Installation = () => {
  const data = useLoaderData();
  const [installedAppsList, setInstalledAppsList] = useState([]);
  const handleUninstall = (id) => {
    const installedApps = getInstalledApps().filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    const updatedList = installedAppsList.filter((app) => app.id !== id);
    setInstalledAppsList(updatedList);
    toast.success("App uninstalled successfully");
  };

  useEffect(() => {
    const storedApps = getInstalledApps().map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) => storedApps.includes(app.id));
    setInstalledAppsList(myInstalledApps);
  }, []);

  const handleSort = (e) => {
  const option = e.target.value;
  let sortedList = [...installedAppsList];

  if (option === "Rating") {
    sortedList = [...installedAppsList].sort((a, b) => b.ratingAvg - a.ratingAvg);
  } else if (option === "Downloads High-Low") {
    sortedList = [...installedAppsList].sort(
      (a, b) => convertCountToNumber(b.downloads) - convertCountToNumber(a.downloads)
    );
  } else if (option === "Downloads Low-High") {
    sortedList = [...installedAppsList].sort(
      (a, b) => convertCountToNumber(a.downloads) - convertCountToNumber(b.downloads)
    );
  } else if (option === "App Size") {
    sortedList = [...installedAppsList].sort((a, b) => a.size - b.size);
  }

  setInstalledAppsList(sortedList);
};


  return (
    <div className="text-center m-20">
      <div>
        <h1 className="text-[48px] font-bold text-[#001931] dark:text-white">
          Your Installed Apps
        </h1>
        <p className="text-[20px] font-normal text-[#627382] mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between">
        <div className="text-[24px] font-semibold text-[#001931] dark:text-white">
          <p>({installedAppsList.length}) Apps Found</p>
        </div>
        <select className="select" onChange={handleSort}>
          <option hidden>Sort by</option>
          <option>Rating</option>
          <option>Downloads High-Low</option>
          <option>Downloads Low-High</option>
          <option>App Size</option>
        </select>
      </div>
      <div className="">
        <List
          installedAppsList={installedAppsList}
          onUninstall={handleUninstall}
        ></List>
      </div>
    </div>
  );
};

export default Installation;
