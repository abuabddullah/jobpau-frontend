import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.config";
import loginImage from "../../../assets/login.svg";
import { UserContext, googleProvider } from "../../contexts/UserContextProvider/UserContextProvider";
const Login = () => {
  const { setUserLoading } = useContext(UserContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/register";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    /* 1# : set loading to true */
    setUserLoading(true);

    /* 2# : sign user with email and password */
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        console.log(loggedUser);
        reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    /* 1# : set loading to true */
    setUserLoading(true);

    /* 2# : signIn user with gmail */
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUserLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setUserLoading(false);
      });

    /* 3# : set loading to false */
    setUserLoading(false);
  };

  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 flex justify-center align-middle">
        <img src={loginImage} className="h-full w-3/4" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  className="inputBox"
                />
                {errors.email && (
                  <small className="text-red-500">email is required</small>
                )}
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="inputBox"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <small className="text-red-500">password is required</small>
                )}
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full bg-slate-600 hover:bg-white hover:text-black duration-300 border-2"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
          <div className="w-full">
            <div className="flex justify-center align-middle">or</div>
            <button
              onClick={handleGoogleSignIn}
              className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed  bg-slate-600 hover:bg-white disabled:hover:text-white hover:text-black duration-300 border-2"
            >
              Google Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
