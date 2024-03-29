import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import shop from "../../assets/Icon/shop.png";
import list from "../../assets/Icon/list.png";
import review from "../../assets/Icon/review.png";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52">
            {/* <!-- Sidebar content here --> */}
            <li className="font-semibold text-primary">
              {/* <NavLink to="/dashboard/book/:id">
                <img className="w-5" src={shop} alt="" />
                Book
              </NavLink> */}
            </li>

            <li className="font-semibold text-primary">
              <NavLink to="/dashboard/booking-list">
                <img className="w-5" src={list} alt="" /> Booking List
              </NavLink>
            </li>
            <li className="font-semibold text-primary">
              <NavLink to="/dashboard/add-review">
                <img className="w-5 mr-1" src={review} alt="" /> Review
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
