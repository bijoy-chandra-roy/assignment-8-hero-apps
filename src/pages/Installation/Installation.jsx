import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../utilities/installApp";
import List from './../../components/List';

const Installation = () => {
  const data = useLoaderData();

  const [installedAppsList, setInstalledAppsList] = useState([]);

  useEffect(() => {
    const storedApps = getInstalledApps().map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) => storedApps.includes(app.id));
    setInstalledAppsList(myInstalledApps);
  }, []);
  return (
    <div className="text-center mx-20">
      <div>
        <h1>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between">
        <div className="">
          <p>({installedAppsList.length}) Apps Found</p>
        </div>
        <select className="select">
          <option hidden>Sort by</option>
          <option>Rating</option>
          <option>Downloads</option>
          <option>Reviews</option>
          <option>App Size</option>
          <option>Title</option>
          <option>Company Name</option>
          <option>Newest First</option>
        </select>
      </div>
      <div className="">
        <List installedAppsList={installedAppsList}></List>
      </div>
    </div>
  );
};

export default Installation;
