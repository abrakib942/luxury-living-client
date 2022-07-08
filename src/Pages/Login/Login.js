import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/Icon/google.png";

const Login = () => {
  return (
    <div className="h-screen mt-24 px-8">
      <h2 className="text-xl text-center font-bold">Login With</h2>
      <button className="input input-bordered rounded-3xl block mx-auto font-semibold mt-6">
        {" "}
        <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 flex items-center">
          <img className="w-7 mr-6" src={google} alt="" />
          Continue With Google
        </div>
      </button>
      <p className="text-center mt-3">
        Don't have an account?{" "}
        <Link className="text-primary font-semibold decoration" to="/signup">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
