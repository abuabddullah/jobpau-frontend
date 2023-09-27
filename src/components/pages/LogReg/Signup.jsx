import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/login.svg";
const Signup = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center pt-14">
      <div className="w-1/2 flex justify-center align-middle">
        <img src={loginImage} className="h-full w-3/4" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="inputBox"
                  {...register("email", { required: true })}
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
                  name="password"
                  id="password"
                  className="inputBox"
                  {...register("password")}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="confirm-password" className="ml-5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="inputBox"
                  {...register("confirmPassword")}
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed  bg-slate-600 hover:bg-white disabled:hover:text-white hover:text-black duration-300 border-2"
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
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

export default Signup;
