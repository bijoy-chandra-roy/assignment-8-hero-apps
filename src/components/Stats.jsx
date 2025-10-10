import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col gap-10 p-20 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white items-center">
    <h2 className="text-[48px] font-bold mb-8">Trusted By Millions, Built For You</h2>
    <div className="flex flex-col gap-6 justify-around w-full md:flex-row">
        <div className="flex flex-col items-center">
            <div className="text-xl opacity-80 mb-2">Total Downloads</div>
            <div className="text-6xl font-bold mb-1">29.6M</div>
            <div className="text-sm opacity-60">21% More Than Last Month</div>
        </div>

        <div className="flex flex-col items-center">
            <div className="text-xl opacity-80 mb-2">Total Reviews</div>
            <div className="text-6xl font-bold mb-1">906K</div>
            <div className="text-sm opacity-60">46% More Than Last Month</div>
        </div>

        <div className="flex flex-col items-center">
            <div className="text-xl opacity-80 mb-2">Active Apps</div>
            <div className="text-6xl font-bold mb-1">132+</div>
            <div className="text-sm opacity-60">31 More Will Launch</div>
        </div>
    </div>
</div>
  );
};

export default Stats;
