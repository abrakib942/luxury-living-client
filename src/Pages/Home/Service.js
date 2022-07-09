import React from "react";
import shop from "../../assets/Icon/shop.png";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div>
      <div class="card w-[370px] shadow-lg">
        <figure>
          <img className="w-24" src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="text-center text-xl text-[#16322E] font-bold">{name}</h2>
          <h2 className="text-center text-primary font-bold text-xl">
            ${price}
          </h2>
          <p className="text-center text-[#606268]">{description}</p>
          <button className="btn btn-outline btn-primary mt-4 font-bold ">
            <img className="w-5 mr-1" src={shop} alt="" /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
