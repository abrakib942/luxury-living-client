import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const logOut = () => {
    signOut(auth);
  };

  const menuItems = [
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About us</Link>
      </li> */}
      <li>
        <Link to="/service">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>,
  ];

  return (
    <div class="navbar bg-[#F6F6F6] lg:px-16 sticky top-0 z-20">
      {pathname.includes("/dashboard") && (
        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      )}

      <div className="navbar-start">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-end">
        <div class=" dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {user ? (
              <>
                <div class="flex items-center">
                  <p className="text-primary font-bold">{user.displayName}</p>
                  <button onClick={logOut} className="btn btn-ghost font-bold">
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" class="btn px-12 btn-primary text-white mr-12">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-2 mr-28 p-0 font-semibold">
          {menuItems}
        </ul>
      </div>
      <div class="navbar-end lg:flex hidden">
        {user ? (
          <>
            <p className="text-primary font-bold">{user.displayName}</p>
            <button onClick={logOut} className="btn btn-ghost">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" class="btn px-12 btn-primary text-white mr-12">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
