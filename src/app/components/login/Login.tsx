"use client";
import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("loggedIn", "true");
      router.push("home");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[48px] mt-[64px]">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="logo"
          className="w-[177px] h-[40px]"
        />
        <div className="px-[24px] py-[36px] max-w-[530px] min-h-[503px] w-full bg-white rounded-2xl shadow-xl">
          <h1 className="text-[#21214D] font-reddit font-bold text-[32px] leading-[140%] tracking-[-0.3px]">
            Welcome back!
          </h1>
          <p className="text-[#57577B] mt-[8px]">
            Log in to continue tracking your mood and sleep.
          </p>

          <p className="text-[#21214D] font-reddit font-normal text-[18px] leading-[140%] tracking-[-0.3px] mt-[36px]">
            Email address
          </p>
          <input
            type="text"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-[49px] mt-[12px] rounded-xl border-[1px] border-[#9393B7] outline-none pl-[16px] placeholder:font-reddit placeholder:font-normal placeholder:text-[18px] placeholder:leading-[140%] placeholder:tracking-[-0.3px] placeholder:text-[#57577B]"
          />

          <p className="text-[#21214D] font-reddit font-normal text-[18px] leading-[140%] tracking-[-0.3px] mt-[18px]">
            Password
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-[49px] mt-[8px] rounded-xl border-[1px] border-[#9393B7] outline-none pl-[16px] placeholder:font-reddit placeholder:font-normal placeholder:text-[18px] placeholder:leading-[140%] placeholder:tracking-[-0.3px] placeholder:text-[#57577B]"
          />

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full h-[52px] cursor-pointer bg-[#4865DB] flex font-reddit font-semibold text-[20px] leading-[140%] tracking-[0px] text-center mt-[36px] items-center text-white justify-center rounded-xl"
          >
            Log In
          </button>

          <p className="text-[#57577B] mt-[16px] font-reddit font-normal text-[18px] leading-[140%] tracking-[-0.3px] text-center">
            Haven't got an account?{" "}
            <span
              onClick={() => router.push("/")}
              className="text-[#4865DB] cursor-pointer hover:underline"
            >
              Sign up.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
