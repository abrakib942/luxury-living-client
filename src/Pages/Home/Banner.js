import React from "react";
import banner from "../../assets/Image/banner.png";

const Banner = () => {
  return (
    <section
      style={{
        background: "#F6F6F6",
      }}
    >
      <div class="hero py-12 px-12 lg:px-32">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            class="lg:max-w-sm rounded-lg shadow-2xl lg:ml-10"
            alt=""
          />
          <div className="lg:mr-10">
            <h1 class="text-5xl font-bold text-neutral">
              We Build <br /> Your Dream
            </h1>
            <p class="py-4">
              Online Easte Agency, the mordern way to sell your own home, <br />{" "}
              You can use Griffin Residential to market your property
            </p>
            <button class="btn btn-primary text-white px-12">Booking</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
