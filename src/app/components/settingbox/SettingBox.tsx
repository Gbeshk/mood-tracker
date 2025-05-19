"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import settingIcon from "../../images/cog.svg";
import logOutIcon from "../../images/Logout Icon.svg";
import close from "../../images/close.svg";
import { useRouter } from "next/navigation";
import ProfilePic from "../../images/profileicon.svg";

type SettingBoxProps = {
  settingsOpen: boolean;
};
export default function SettingBox({ settingsOpen }: SettingBoxProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editModal, setEditModal] = useState(false);
  const router = useRouter();
  const [changedName, setChangedName] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const nameLocal = localStorage.getItem("name");
    const emailLocal = localStorage.getItem("email");
    if (nameLocal) {
      setName(nameLocal);
      setChangedName(nameLocal);
    }
    if (emailLocal) setEmail(emailLocal);
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);
  return (
    <>
      {settingsOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[200px] h-[158px] bg-white absolute left-[-140px] top-[52px] drop-shadow-xl rounded-xl py-[12px] px-[16px] cursor-auto"
        >
          <p className="font-medium text-[18px] leading-[120%] tracking-[0px] font-[`Reddit_Sans'] text-[#21214D]">
            {name}
          </p>
          <p className="text-[#9393B7] font-normal text-[15px] leading-[140%] tracking-[-0.3px] font-reddit mt-[6px]">
            {email}
          </p>
          <div className="w-full h-[1px] mt-[16px] bg-[#E0E6FA]"></div>
          <div
            onClick={() => {
              setEditModal(true);
            }}
            className="mt-[16px] flex items-center gap-2 cursor-pointer"
          >
            <Image
              src={settingIcon}
              width={100}
              height={100}
              className="w-[16px] h-[16px] cursor-pointer"
              alt="setting icon"
            ></Image>
            <p className="text-[#21214D] font-reddit font-normal text-[15px] leading-[140%] tracking-[-0.3px]">
              Settings
            </p>
          </div>
          <div
            className="mt-[8px] flex items-center gap-2 cursor-pointer"
            onClick={() => {
              localStorage.setItem("loggedIn", "false");
              router.push("/login");
            }}
          >
            <Image
              src={logOutIcon}
              width={100}
              height={100}
              className="w-[16px] h-[16px] cursor-pointer"
              alt="setting icon"
            ></Image>
            <p className="text-[#21214D] font-reddit font-normal text-[15px] leading-[140%] tracking-[-0.3px]">
              Logout
            </p>
          </div>
        </div>
      )}
      {editModal && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 z-50 px-[36px] flex items-center justify-center overflow-auto"
        >
          <div className="absolute inset-0 bg-[#21214D] opacity-70"></div>
          <div className="relative bg-gray-200 py-[36px] px-[40px] rounded-lg shadow-xl w-full max-w-[600px]  z-10">
            <Image
              src={close}
              width={100}
              height={100}
              alt="close"
              className="absolute w-[15px] h-[15px] left-[90.4%] top-[24px] cursor-pointer"
              onClick={() => {
                setEditModal(false);
              }}
            ></Image>
            <h1 className="font-sans font-bold text-[32px] max-ssm:text-[28px] leading-[1.2] tracking-[-0.3px] mt-[0px]">
              Update your profile
            </h1>
            <p className="text-[#57577B] font-normal text-[18px] leading-[140%] tracking-[-0.3px] font-reddit mt-[8px]">
              Personalize your account with your name and photo.
            </p>
            <p className="text-[#21214D] font-reddit font-normal text-[18px] leading-[140%] tracking-[-0.3px] mt-[24px]">
              Name
            </p>
            <input
              type="text"
              name=""
              id=""
              defaultValue={name}
              onChange={(e) => {
                setChangedName(e.target.value);
              }}
              className="h-[49px] w-full rounded-2xl pl-[16px] border-2 border-black mt-[8px]"
            />
            <div className="flex  gap-4">
              {profileImage ? (
                <div
                  className="w-[64px] h-[64px] rounded-[50%] mt-[24px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${profileImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <Image
                  src={ProfilePic}
                  width={40}
                  height={40}
                  className="w-[64px] h-[64px] mt-[24px] rounded-[50%] bg-gray-200"
                  alt="profile icon"
                />
              )}
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
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file && file.size <= 250 * 1024) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const base64 = reader.result as string;
                        setProfileImage(base64);
                        localStorage.setItem("profileImage", base64);
                      };
                      reader.readAsDataURL(file);
                    } else {
                      alert("File too large or invalid type. Max size: 250KB.");
                    }
                  }}
                />
                <label
                  htmlFor="profileImageInput"
                  className="mt-[8px] w-[91px] h-[38px] rounded-lg outline-none border-1 flex items-center justify-center border-[#9393B7] cursor-pointer  transition-colors"
                >
                  Upload
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.setItem("name", changedName);
                window.location.reload();
              }}
              className=" cursor-pointer w-full h-[60px] bg-[#4865DB] rounded-xl mt-[24px] text-white font-semibold text-[20px] leading-[140%] tracking-[0px] text-center font-['Reddit_Sans']"
            >
              Save changes
            </button>
          </div>
        </div>
      )}
    </>
  );
}
