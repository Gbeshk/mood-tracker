import React, { useEffect, useState } from "react";
import Chart from "../chart/Table";
interface WhiteDivsProps {
  modalPage: number;
}
export default function WhiteDivs({ modalPage }: WhiteDivsProps) {
  const [color, setColor] = useState("#FFC97C");

  const [x, setX] = useState(false);

  useEffect(() => {
    const mood = localStorage.getItem("mood");
    const feeling = localStorage.getItem("feeling");
    const sleep = localStorage.getItem("sleep");
    const note = localStorage.getItem("note");

    if (mood && feeling && sleep && note) {
      setX(true);
    }
  }, [modalPage]);
  return (
    <>
      <div
        className={`flex gap-[36px] max-mmd:gap-[24px] justify-between   max-w-[1200px] w-full mx-auto flex-wrap ${
          x ? "mt-[36px] max-mmd:mt-[4px]" : "mt-[60px]"
        }`}
      >
        <div className="w-full max-w-[370px] max-mmd:max-w-[704px] h-[453px] rounded-xl mx-auto bg-white px-[25px] pt-[18px] box-border">
          <p className="font-reddit-sans font-semibold text-[20px] leading-[1.4]">
            Average mood{" "}
            <span className="font-reddit-sans font-normal text-[15px] leading-[1.4] tracking-[-0.3px] text-[#21214D]">
              (Last 5 Check-ins)
            </span>
          </p>
          <div
            style={{ backgroundColor: color }}
            className="w-full max-w-[320px] max-mmd:max-w-[656px] h-[150px] rounded-3xl flex flex-col gap-[8px] pl-[20px] justify-center mt-[18px]"
          >
            <p className="font-reddit-sans font-semibold text-[24px] leading-[1.4]">
              Keep tracking!
            </p>
            <span className="font-reddit-sans font-normal text-[15px] leading-[1.4] tracking-[-0.3px] text-[#21214D]">
              Log 5 check-ins to see your average mood.
            </span>
          </div>
          <p className="font-reddit-sans font-semibold text-[20px] leading-[1.4]  mt-[18px]">
            Average sleep{" "}
            <span className="font-reddit-sans font-normal text-[15px] leading-[1.4] tracking-[-0.3px] text-[#21214D]">
              (Last 5 Check-ins)
            </span>
          </p>
          <div
            className={`max-w-[320px] max-mmd:max-w-[656px] w-full ${
              x ? "bg-[#4865DB]" : "bg-[#E0E6FA]"
            } h-[150px]  mt-[18px] rounded-3xl flex flex-col gap-[8px] pl-[20px] justify-center`}
          >
            <p className="font-reddit-sans font-semibold text-[24px] leading-[1.4]">
              Not enough data yet!
            </p>
            <span className="font-reddit-sans font-normal text-[15px] leading-[1.4] tracking-[-0.3px] text-[#21214D]">
              Track 5 nights to view average sleep.
            </span>
          </div>
        </div>
        <Chart />
      </div>
    </>
  );
}
