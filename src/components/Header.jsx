import React, { useState } from "react";
import {
  BoltIcon,
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-3/4 mx-auto p-5 bg-gray-100 rounded-md flex justify-between items-center">
      {/* logo section  */}
      <Link className="inline-flex justify-center items-center">
        <BoltIcon className="h-6 w-6 text-blue-700"></BoltIcon>
        <span className="ms-3 font-bold text-xl text-gray-800">
          KP BookStore
        </span>
      </Link>

      {/* responsive btn  */}
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="w-6 h-6 text-blue-700"></XMarkIcon>
          ) : (
            <Bars3BottomRightIcon className="w-6 h-6 text-blue-700"></Bars3BottomRightIcon>
          )}
        </span>
      </button>

      {/* menu section  */}
      <ul
        className={`lg:flex justify-center items-center absolute lg:static ${
          open ? "top-16" : "-top-60"
        }`}
      >
        <li className="lg:ms-5">
          <NavLink
            to="/"
            title="Home"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl font-bold underline"
                : "text-gray-800 text-xl font-bold"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="lg:ms-5">
          <NavLink
            to="/books"
            title="Book Shop Page"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl font-bold underline"
                : "text-gray-800 text-xl font-bold"
            }
          >
            Books
          </NavLink>
        </li>
        <li className="lg:ms-5">
          <NavLink
            to="/about"
            title="About us"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 text-xl font-bold underline"
                : "text-gray-800 text-xl font-bold"
            }
          >
            About us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
