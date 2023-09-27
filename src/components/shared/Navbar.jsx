/* import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-50 p-3">
      <ul className="container mx-auto grid grid-cols-8">
        <li>
          <Link to="/" className="text-3xl uppercase font-semibold">
            Job<span className="font-extrabold">Pau</span>
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <button className="rounded-full px-6 py-1 border-2 hover:bg-slate-600 hover:text-white ease-in-out duration-300">
              Jobs
            </button>
          </Link>
        </li>

        <li>
          <Link to="/login">
            <button className="rounded-full px-8 py-1 border-2 bg-slate-600 hover:bg-white hover:text-black text-white ease-in-out duration-300">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <nav
      className={`h-14 sticky top-0 w-full z-[999]  ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">
            Job<span className="font-extrabold">Pau</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

        <li>
          <Link
            className="border border-black px-4 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all "
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
