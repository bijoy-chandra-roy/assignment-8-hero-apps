import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Cards from "./../../components/Cards";
import AppNotFound from "./AppNotFound";

const AppsPage = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center m-20">
      <h1 className="text-[48px] font-bold text-[#001931] dark:text-white">
        Our All Applications
      </h1>
      <p className="text-[20px] font-normal text-[#627382] mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between mb-6">
        <div className="text-[24px] font-semibold text-[#001931] dark:text-white">
          <p>({filteredApps.length}) Apps Found</p>
        </div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {filteredApps.length > 0 ? (
        <Cards data={filteredApps} />
      ) : (
        <AppNotFound />
      )}
    </div>
  );
};

export default AppsPage;
