import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/login.svg";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
        </div>
      </div>
    </div>
  );
};

export default Login;
