import React from "react";
import { useNavigate } from "react-router";
import error404 from "../assets/error-404.png";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={error404} alt="" />
      <div className="text-center flex flex-col gap-2 my-4">
        <h1 className="text-[48px] font-semibold  text-black">
          Oops, page not found!
        </h1>
        <p className="text-[20px] font-normal text-[#627382]">
          The page you are looking for is not available.
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

export default PageNotFound;
