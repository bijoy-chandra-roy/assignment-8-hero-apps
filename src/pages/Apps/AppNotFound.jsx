import React from "react";
import { Navigate, useNavigate } from "react-router";
import app404 from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={app404} alt="" />
      <div className="text-center flex flex-col gap-2 my-4">
        <h1 className="text-[48px] font-semibold text-black">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[20px] font-normal text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
