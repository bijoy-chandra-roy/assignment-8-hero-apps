import React from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const pages = (
    <>
      <NavLink to="/" className="menu menu-horizontal px-1">
        <li>Home</li>
      </NavLink>

      <NavLink to="/apps" className="menu menu-horizontal px-1">
        <li>Apps</li>
      </NavLink>

      <NavLink to="/installation" className="menu menu-horizontal px-1">
        <li>Installation</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {pages}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          <img src={logo} alt="" className="h-full" />
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1">{pages}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
          href="https://github.com/bijoy-chandra-roy"
          target="blank"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
