import React from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Icon/google.png";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-500 text-center"> {error?.message} </p>
    );
  }

  if (user) {
    navigate("/");
    console.log(user);
  }

  return (
    <div className=" mt-24 px-8">
      <h2 className="text-xl text-center font-bold">Login With</h2>
      <button
        onClick={() => signInWithGoogle()}
        className="input input-bordered rounded-3xl block mx-auto font-semibold mt-6"
      >
        {" "}
        <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 flex items-center">
          <img className="w-7 mr-6" src={google} alt="" />
          Continue With Google
        </div>
      </button>
      {signInError}
      {/* <p className="text-center mt-3">
        Don't have an account?{" "}
        <Link className="link link-primary font-semibold" to="/signup">
          Create an account
        </Link>
      </p> */}
    </div>
  );
};

export default Login;
