import React from "react";
import "../../style.css";
import google from "../../assets/Icon/google.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" mt-16">
      <div className="card w-[450px] shadow-xl mx-auto my-auto">
        <button className="input input-bordered rounded-3xl block mx-auto font-semibold ">
          {" "}
          <div className=" flex items-center px-10">
            <img className="w-7 mr-6" src={google} alt="" />
            Continue With Google
          </div>
        </button>
        <div class="divider my-8">OR</div>
        {/* <h2 className="text-xl font-semibold text-center">Create an Account</h2> */}
        <div className="card-body">
          <form className=" form-control gap-5">
            <input
              type="text"
              placeholder="First Name"
              class="input input-primary w-full max-w-sm "
            />
            <input
              type="text"
              placeholder="Last Name"
              class="input input-primary w-full max-w-sm"
            />
            <input
              type="text"
              placeholder="Email"
              class="input input-primary w-full max-w-sm"
            />
            <input
              type="text"
              placeholder="Password"
              class="input input-primary w-full max-w-sm"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              class="input input-primary w-full max-w-sm"
            />
            <input
              type="submit"
              value="Create an account"
              class="btn btn-primary w-full max-w-sm"
            />
            <p>
              Already have an account?{" "}
              <Link className="link link-primary font-semibold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
