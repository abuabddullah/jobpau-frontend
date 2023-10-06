import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.config";
import { UserContext } from "../contexts/UserContextProvider/UserContextProvider";

const Navbar = () => {
  const {
    stateUser: { role },
  } = useSelector((state) => state.authUser);
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("user logged out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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

        {user && !role && (
          <li>
            <Link
              className="border border-black px-4 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all "
              to="/register"
            >
              Register
            </Link>
          </li>
        )}

        {user && role && (
          <li>
            <Link
              className="border border-black px-4 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all "
              to="/dashboard/employer"
            >
              Dashboard
            </Link>
          </li>
        )}

        {user ? (
          <>
            <li>
              <button onClick={handleLogout} className="hover:text-primary">
                Log out
              </button>
            </li>
            <></>
          </>
        ) : (
          <li>
            <Link
              className="border border-black px-4 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all "
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
