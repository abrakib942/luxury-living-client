import React from "react";
import washington from "../../assets/Image/washington.png";
import rego from "../../assets/Image/rego.png";
import gorgeous from "../../assets/Image/gorgeous.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="my-32 lg:px-32">
      <p className="text-center text-primary font-bold ">Projects</p>
      <h2 className="lg:text-5xl text-4xl text-neutral font-bold text-center">
        Discover the latest Interior Design <br /> available today
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 lg:gap-24 mt-16">
        <div class="card  w-80 lg:w-96 bg-base-100">
          <figure>
            <img src={washington} alt="" />
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
        <div class="card  w-80  lg:w-96 bg-base-100">
          <figure>
            <img src={rego} alt="" />
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
            <img src={gorgeous} alt="Shoes" />
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
