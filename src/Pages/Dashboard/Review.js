import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <section className="lg:px-16 px-8">
      <h2 className="text-2xl font-bold my-4">Review</h2>
      <div className="bg-[#F4F7FC] h-screen p-5">
        <div className="grid grid-flow-row">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-lg mb-3 bg-white"
            required
          />
          <input
            type="text"
            placeholder="Company's name, Designation"
            class="input input-bordered  input-md w-full max-w-lg mb-3 bg-white"
            required
          />
          <Rating
            initialRating={5}
            fullSymbol={
              <FontAwesomeIcon icon={faStar} className="text-[#FFAC0C]" />
            }
            emptySymbol={
              <FontAwesomeIcon icon={faStar} className="text-gray-400" />
            }
          />

          <textarea
            class="textarea w-full max-w-lg bg-white "
            rows="3"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Review;
