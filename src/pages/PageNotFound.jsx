import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
