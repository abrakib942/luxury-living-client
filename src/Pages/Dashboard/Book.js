import React from "react";
import credit from "../../assets/Icon/credit.png";
import paypal from "../../assets/Icon/paypal.png";

const Book = () => {
  return (
    <section className="lg:px-16 px-8">
      <h2 className="text-2xl font-bold my-4">Book</h2>
      <div className="bg-[#F4F7FC] p-5">
        <div className="grid grid-flow-row">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-lg mb-3 bg-white"
            required
          />
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered  input-md w-full max-w-lg mb-3 bg-white"
            required
          />
          <input
            type="text"
            placeholder=""
            class="input input-bordered input-md w-full max-w-lg mb-3 bg-white"
            required
          />
        </div>
        <p className="my-2 text-[#899694] text-sm font-semibold">Pay With</p>
        <div className="flex items-center lg:gap-16 gap-4">
          <p className="flex items-center gap-2">
            <input type="checkbox" name="radio-2" class="radio radio-primary" />
            <img className="w-7" src={credit} alt="" />
            <p className="font-semibold text-primary">Credit Card</p>
          </p>
          <p className="flex items-center gap-2">
            <input type="checkbox" name="radio-2" class="radio radio-primary" />
            <img className="w-7" src={paypal} alt="" />
            <p className="font-semibold text-primary">Paypal</p>
          </p>
        </div>
        <input
          type="text"
          placeholder="Card Number"
          class="input input-bordered  input-md w-full max-w-lg mb-2 mt-3 bg-white"
          required
        />
        <div className="lg:flex md:flex gap-1 mb-4">
          <input
            type="text"
            placeholder="MM/YY"
            class="input input-bordered input-md w-64 mb-2 max-w-xs bg-white"
          />
          <input
            type="text"
            placeholder="CVC"
            class="input input-bordered input-md  max-w-xs w-64 bg-white "
          />
        </div>
        <div className="lg:flex md:flex items-center lg:gap-36 md:gap-36">
          <p className="text-[#16322E] font-semibold">
            Your Service charged will be $1000
          </p>
          <button className="btn btn-primary px-12 mt-2">Pay</button>
        </div>
      </div>
    </section>
  );
};

export default Book;
