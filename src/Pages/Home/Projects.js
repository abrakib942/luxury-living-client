import React from "react";
import washington from "../../assets/Image/washington.png";
import rego from "../../assets/Image/rego.png";
import gorgeous from "../../assets/Image/gorgeous.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="my-32 lg:px-40">
      <p className="text-center text-primary font-bold ">Projects</p>
      <h2 className="lg:text-4xl text-3xl text-neutral font-bold text-center lg:px-64 px-16">
        Discover the latest Interior Design available today
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-6 lg:gap-1 mt-16">
        <div class="card w-80 lg:w-96 bg-base-100">
          <figure>
            <img className="w-80" src={washington} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold text-secondary">
              Villa on Washington Avenue
            </h2>
            <h2 class="text-center text-lg  text-accent">
              {" "}
              <FontAwesomeIcon
                className="text-secondary mr-1"
                icon={faLocationDot}
              />{" "}
              Dhaka, Bangladesh
            </h2>
          </div>
        </div>
        <div class="card w-80  lg:w-96 bg-base-100">
          <figure>
            <img className="w-80" src={rego} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold text-secondary">
              Luxury villa in Rego Park
            </h2>
            <h2 class="text-center text-lg  text-accent">
              {" "}
              <FontAwesomeIcon
                className="text-secondary mr-1"
                icon={faLocationDot}
              />{" "}
              Dhaka, Bangladesh
            </h2>
          </div>
        </div>
        <div class="card   w-80  lg:w-96 bg-base-100 ">
          <figure>
            <img className="w-80" src={gorgeous} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-xl font-bold text-secondary">
              Gorgeous house
            </h2>
            <h2 class="text-center text-lg  text-accent">
              {" "}
              <FontAwesomeIcon
                className="text-secondary mr-1"
                icon={faLocationDot}
              />{" "}
              Dhaka, Bangladesh
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
