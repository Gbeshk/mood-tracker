"use client";
import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileIcon from "../../images/profileicon.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import errorIcon from "../../images/info-circle.svg";
const Loginschema = yup.object().shape({
  email: yup.string().email("It must be an e-mail").required("Can't be empty"),
  password: yup
    .string()
    .required("Can't be empty")
    .min(8, "Minimum 8 characters")
    .max(20, "Maximum 20 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must include uppercase, lowercase and number"
    ),
});

const Step2Schema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

type Step1FormData = {
  email: string;
  password: string;
};

type Step2FormData = {
  name: string;
  profileImage?: FileList;
};

function SignUpClient() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormData>({
    resolver: yupResolver(Loginschema),
  });

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<Step2FormData>({
    resolver: yupResolver(Step2Schema),
  });

  const onSubmit = (data: Step1FormData) => {
    console.log(data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    setStep(2);
  };

  const onSubmitStep2 = (data: Step2FormData) => {
    console.log(data);
    localStorage.setItem("name", data.name);
    alert("Account Registered Succesfully");
    router.push("/login");
  };

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPreviewImage(base64);
        localStorage.setItem("profileImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {step === 1 && (
        <div className="flex flex-col items-center gap-[48px] mt-[64px]">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            className="w-[177px] h-[40px]"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-[24px]  py-[36px]  max-w-[530px] min-h-[486px] w-full bg-white rounded-2xl shadow-xl"
          >
            <h1 className="text-[#21214D] font-reddit  font-bold text-[32px] leading-[140%] tracking-[-0.3px]">
              Create an account
            </h1>
            <p className="text-[#57577B] mt-[8px]">
              Join to track your daily mood and sleep with ease.
            </p>

            <label className="block mt-[36px] text-[#21214D] font-reddit text-[18px]">
              Email address
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="name@mail.com"
              className="w-full h-[49px] mt-[12px] rounded-xl border-[1px] border-[#9393B7] pl-[16px] outline-none placeholder:font-reddit placeholder:font-normal placeholder:text-[18px] placeholder:leading-[140%] placeholder:tracking-[-0.3px] placeholder:text-[#57577B]"
            />
            {errors.email && (
              <div className="flex items-center mt-2 gap-[6px]">
                <Image
                  src={errorIcon}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-[12px] h-[12x]"
                />
                <p className="text-red-700  text-[12px] leading-[110%]">
                  {errors.email.message}
                </p>
              </div>
            )}

            <label className="block mt-[18px] text-[#21214D] font-reddit text-[18px]">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full h-[49px] mt-[8px] rounded-xl border-[1px] border-[#9393B7] pl-[16px] outline-none"
            />
            {errors.password && (
              <div className="flex items-center mt-2 gap-[6px]">
                <Image
                  src={errorIcon}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-[12px] h-[12x]"
                />
                <p className="text-red-700  text-[12px] leading-[110%]">
                  {errors.password.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-[52px] bg-[#4865DB] cursor-pointer font-reddit font-semibold text-[20px] text-white mt-[36px] rounded-xl"
            >
              Sign Up
            </button>

            <p className="text-[#57577B] mt-[16px] font-reddit text-[18px] text-center">
              Already got an account?{" "}
              <span
                onClick={() => router.push("/login")}
                className="text-[#4865DB] cursor-pointer hover:underline"
              >
                Log in.
              </span>
            </p>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center gap-[48px] mt-[64px]">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            className="w-[177px] h-[40px]"
          />
          <form
            onSubmit={handleSubmitStep2(onSubmitStep2)}
            className="px-[24px] py-[36px]  max-w-[530px] min-h-[503px] w-full bg-white rounded-2xl shadow-xl"
          >
            <h1 className="text-[#21214D] font-reddit font-bold text-[32px] leading-[140%] tracking-[-0.3px]">
              Personalize your experience
            </h1>
            <p className="text-[#57577B] mt-[8px]">
              Add your name and a profile picture to make Mood yours.
            </p>

            <label className="text-[#21214D] font-reddit font-normal text-[18px] leading-[140%] tracking-[-0.3px] mt-[36px] block">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Appleseed"
              {...registerStep2("name")}
              className="w-full h-[49px] mt-[12px] rounded-xl border-[1px] border-[#9393B7] outline-none pl-[16px] placeholder:font-reddit placeholder:font-normal placeholder:text-[18px] placeholder:leading-[140%] placeholder:tracking-[-0.3px] placeholder:text-[#57577B]"
            />
            {errorsStep2.name && (
              <div className="flex items-center mt-2 gap-[6px]">
                <Image
                  src={errorIcon}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-[12px] h-[12x]"
                />
                <p className="text-red-700  text-[12px] leading-[110%]">
                  {errorsStep2.name.message}
                </p>
              </div>
            )}
            <div className="flex items-center gap-4">
              <Image
                src={previewImage || ProfileIcon}
                width={100}
                height={100}
                alt="profile pic"
                className="w-[64px] h-[64px] rounded-[50%]"
              />
              <div>
                <label className="text-[#21214D] font-[Reddit Sans] font-normal text-[18px] leading-[140%] tracking-[-0.3px] mt-[24px] block">
                  Upload Image
                </label>
                <p className="text-[#57577B] mt-[4px] font-normal text-[15px] leading-[140%] tracking-[-0.3px]">
                  Max 250KB, PNG or JPEG
                </p>
                <input
                  type="file"
                  id="profileImageInput"
                  {...registerStep2("profileImage")}
                  onChange={(e) => {
                    registerStep2("profileImage").onChange(e);
                    onFileChange(e);
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="profileImageInput"
                  className="mt-[8px] w-[91px] h-[38px] rounded-lg outline-none border-1 flex items-center justify-center border-[#9393B7] cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  Upload
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[52px] cursor-pointer bg-[#4865DB] font-reddit font-semibold text-[20px] text-white mt-[36px] rounded-xl"
            >
              Start Tracking
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpClient;
