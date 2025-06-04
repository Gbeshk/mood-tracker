"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import logOut from "../../images/Profile Icon Dropdown Arrow.svg";
import SettingBox from "../settingbox/SettingBox";
import ProfilePic from "../../images/profileicon.svg";
export default function Header() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);
  return (
    <>
      <div className="flex justify-between max-w-[1200px] w-full mx-auto max-ssm:mt-[16px] max-mmd:mt-[24px] mt-[40px]">
        <Image
          onClick={() => {
            window.location.reload();
          }}
          src={logo}
          width={100}
          height={100}
          className="w-[177px] h-[44px] cursor-pointer"
          alt="logo"
        ></Image>
        <div
          onClick={() => {
            setSettingsOpen(!settingsOpen);
          }}
          className="flex items-center gap-[8px] relative cursor-pointer"
        >
          <SettingBox settingsOpen={settingsOpen} />
          {profileImage ? (
            <div
              className="w-[40px] h-[40px] rounded-[50%] overflow-hidden"
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
              className="w-[40px] h-[40px] rounded-[50%] bg-gray-200"
              alt="profile icon"
            />
          )}
          <Image
            src={logOut}
            width={100}
            height={100}
            className="w-[12px] h-[12px] cursor-pointer"
            alt="logout icon"
          ></Image>
        </div>
      </div>
    </>
  );
}
