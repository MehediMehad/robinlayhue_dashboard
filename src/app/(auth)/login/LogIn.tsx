"use client";
import React, { FormEvent, useState } from "react";
import loginImage from "@/assests/login.png";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import Cookies from "js-cookie";
import { useLoginUserMutation } from "@/Redux/Api/userApi";
import { AppDispatch } from "@/Redux/store";
import { setUser, logout, TUser } from "@/Redux/ReduxFunction";
import ShowToastify from "@/utils/ShowToastify";
import { ToastContainer } from "react-toastify";
import { verifyToken } from "@/utils/verifyToken";
import { LockIcon } from "lucide-react";

const LogIn = () => {
  const [logIn, setLogIn] = useState<string>("Log In to Dashboard");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginFun] = useLoginUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  const route = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // e.stopPropagation()
    const fromData = new FormData(e.currentTarget);
    setLogIn("loading ...");
    const email = fromData.get("email");
    const password = fromData.get("password");
    const loginData = { email, password };

    const { data, error } = await loginFun(loginData);
    

    if (error) {
      ShowToastify({ error: "Check your password or email address" });
      setLogIn("Log In to Dashboard");
    }
    if (data) {
      console.log(data?.data?.role);

      if (data?.data?.role != "ADMIN") {
        ShowToastify({ error: "You are not authorize" });
        setLogIn("Log In to Dashboard");
        dispatch(logout());
        return;
      }
      const user = verifyToken(data.data.accessToken) as TUser;

      const modifyUser = {
        userId: data.data.id,
        role: user.role,
        iat: user.iat,
        exp: user.exp,
      };

      dispatch(setUser({ user: modifyUser, token: data.data.accessToken }));
      Cookies.set("accessToken", data?.data?.accessToken);
      route.push("/dashboard");
      ShowToastify({ success: "Login Successfully" });
    }
  };

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-between max-w-[1440px] mx-auto bgv">
      {/* h-calc(100vh-5px) */}
      <div className="flex pt-20 h-screen overflow-hidden ">
        <Image
          src={loginImage}
          alt="login image"
          className="rounded-[10px] -mb-1"
        />
      </div>
      <div className="w-full max-w-[684px] mt-24">
        <h2 className="text-4xl text-[#171717] leading-tight font-bold mt-1 capitalize">
          Welcome, Admin! Manage {" "}
          <span className="text-[#91D160]">Roof-monster</span> with Ease.
        </h2>
        <p className="text-[#747474] mt-2 mb-4">
          Monitor business activity, customer engagement, and platform
          performance.
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="block text-base font-bold text-primary"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={"admin123@gmail.com"}
              required
              className="mt-1 block w-full px-11 py-3 border border-[#E0E0E0] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#E0E0E0] focus:border-[#E0E0E0] transition duration-200 placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div className="absolute top-[57%] left-4">
              <AiOutlineMail size={20} color="#747474" />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-base font-bold text-primary"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword == true ? "text" : "password"}
                name="password"
                defaultValue={"123456"}
                required
                className="mt-1 block w-full px-11 py-3 border border-[#E0E0E0] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#E0E0E0] focus:border-[#E0E0E0] transition duration-200 placeholder-gray-400"
                placeholder="Enter your password"
              />
              <div className="absolute right-4 top-4">
                <button
                  type="button"
                  className="text-xl"
                  onClick={handleShowPassword}
                >
                  {showPassword == false ? (
                    <IoEyeSharp className="text-[#414141]" />
                  ) : (
                    <FaEyeSlash className="text-[#414141]" />
                  )}
                </button>
              </div>
              <div className="absolute top-4 left-4">
                <LockIcon size={20} color="#747474" />
              </div>
            </div>
          </div>

          <button className="w-full bg-[#91D160] py-2 text-lg font-semibold text-white rounded-lg">
            {logIn}
          </button>
        </form>
        {/* Register Link */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
