"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../images/logo.svg";
import logOut from "../../images/Profile Icon Dropdown Arrow.svg";
import SettingBox from "../settingbox/SettingBox";

export default function Header() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between max-w-[1200px] w-full mx-auto mt-[40px]">
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
          <div className="w-[40px] h-[40px] bg-black rounded-[50%]"></div>
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
