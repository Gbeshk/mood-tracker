"use client";
import moment from "moment";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
interface GreetingProps {
  setmodalOpen: Dispatch<SetStateAction<boolean>>;
  modalPage: number;
}
export default function Greeting({ setmodalOpen, modalPage }: GreetingProps) {
  const todayMoment = moment();
  const [buttonVisible, setButtonVisible] = useState(true);
  const formattedDate = todayMoment.format("dddd, MMMM Do, YYYY");
  const [name, setName] = useState("");
  useEffect(() => {
    const mood = localStorage.getItem("mood");
    const feeling = localStorage.getItem("feeling");
    const sleep = localStorage.getItem("sleep");
    const note = localStorage.getItem("note");
    const name = localStorage.getItem("name");
    if (name) {
      setName(name);
    }
    if (mood && feeling && sleep && note) {
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }
  }, [modalPage]);
  return (
    <>
      <div className="mt-[60px] flex flex-col items-center">
        <p className="font-bold text-[32px] leading-[1.4] tracking-[-0.3px] font-reddit text-center text-[#4865DB]">
          Hello, {name}!
        </p>
        <h1 className="font-reddit font-bold text-[52px] leading-[1.4] tracking-[-2px] text-center text-[#21214D]">
          How are you feeling today?
        </h1>
        <p className="font-sans mt-[8px] font-medium text-lg leading-[120%] tracking-normal text-center text-[#57577B]">
          {formattedDate}
        </p>
        {buttonVisible && (
          <div
            onClick={() => {
              setmodalOpen(true);
            }}
            className="w-[226px] h-[60px] bg-[#4865DB] mt-[60px] rounded-xl cursor-pointer flex items-center justify-center font-sans font-semibold text-xl leading-[140%] tracking-normal text-center text-white"
          >
            Log today's mood
          </div>
        )}
      </div>
    </>
  );
}
