import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col gap-10 p-20 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white items-center">
      <h2 className="text-[48px] font-bold mb-8">
        Trusted By Millions, Built For You
      </h2>
      <div className="flex flex-col gap-6 justify-around w-full md:flex-row">
        <div className="flex flex-col gap-4 items-center">
          <div className="text-[16px] font-normal">Total Downloads</div>
          <div className="text-[64px] font-extrabold">29.6M</div>
          <div className="text-[16px] font-normal">
            21% More Than Last Month
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="text-[16px] font-normal">Total Reviews</div>
          <div className="text-[64px] font-extrabold">906K</div>
          <div className="text-[16px] font-normal">
            46% More Than Last Month
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="text-[16px] font-normal">Active Apps</div>
          <div className="text-[64px] font-extrabold">132+</div>
          <div className="text-[16px] font-normal">31 More Will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
