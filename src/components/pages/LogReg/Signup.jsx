import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.config";
import loginImage from "../../../assets/login.svg";
import { UserContext } from "../../contexts/UserContextProvider/UserContextProvider";

export const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const { setUserLoading } = useContext(UserContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
    /* 1# : set loading to true */
    setUserLoading(true);

    /* 2# : create user with email and password */
    const { email, password } = data;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signingUser = userCredential.user;
        console.log(signingUser);
        setUserLoading(false);
        reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setUserLoading(false);
        // ..
      });

    /* 3# : set loading to false */
    setUserLoading(false);
  };

  const handleGoogleSignIn = () => {
    /* 1# : set loading to true */
    setUserLoading(true);

    /* 2# : create user with email and password */
    // const { email, password } = data;
    // console.log(email, password);
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
              <div className="flex justify-center align-middle">or</div>
              <button
                onClick={handleGoogleSignIn}
                className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed  bg-slate-600 hover:bg-white disabled:hover:text-white hover:text-black duration-300 border-2"
              >
                Google Sign up
              </button>
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
