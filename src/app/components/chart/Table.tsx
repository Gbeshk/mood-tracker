"use client";
import Image from "next/image";
import sleepIcon from "../../images/icon-sleep.svg";
import { useEffect, useState } from "react";

type DateEntry = {
  day: string;
  fullDate: Date;
};

export default function SleepTrends() {
  const [dates, setDates] = useState<DateEntry[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setCurrentMonth(monthNames[today.getMonth()]);

    const dateList: DateEntry[] = [];
    for (let i = 10; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dateList.push({
        day: date.getDate().toString().padStart(2, "0"),
        fullDate: date,
      });
    }

    setDates(dateList);
  }, []);

  return (
    <div className="py-[36px] px-[36px] max-w-[768px] h-[453px] max-mmd:h-auto w-full bg-white rounded-xl mx-auto overflow-x-auto overflow-y-hidden  max-mmd:max-w-[704px]">
      <h2 className="text-[#21214D] mb-4 font-bold text-[32px] leading-[140%] tracking-[-0.3px] font-[Reddit Sans]">
        Mood and sleep trends
      </h2>
      <div className="flex">
        <div className="flex flex-col gap-[40px] mt-[12px]">
          <div className="flex items-center gap-2 mt-[0px]">
            <Image
              src={sleepIcon}
              alt="sleepicon"
              width={100}
              height={100}
              className="w-[10px] h-[10px]"
            ></Image>
            <span className="text-[#57577B] font-normal text-[12px] leading-[110%] tracking-[0px] text-center font-[Reddit Sans]">
              9+ hours
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={sleepIcon}
              alt="sleepicon"
              width={100}
              height={100}
              className="w-[10px] h-[10px]"
            ></Image>
            <span className="text-[#57577B] font-normal text-[12px] leading-[110%] tracking-[0px] text-center font-[Reddit Sans]">
              7-8 hours
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={sleepIcon}
              alt="sleepicon"
              width={100}
              height={100}
              className="w-[10px] h-[10px]"
            ></Image>
            <span className="text-[#57577B] font-normal text-[12px] leading-[110%] tracking-[0px] text-center font-[Reddit Sans]">
              5-6 hours
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={sleepIcon}
              alt="sleepicon"
              width={100}
              height={100}
              className="w-[10px] h-[10px]"
            ></Image>
            <span className="text-[#57577B] font-normal text-[12px] leading-[110%] tracking-[0px] text-center font-[Reddit Sans]">
              3-4 hours
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={sleepIcon}
              alt="sleepicon"
              width={100}
              height={100}
              className="w-[10px] h-[10px]"
            ></Image>
            <span className="text-[#57577B] font-normal text-[12px] leading-[110%] tracking-[0px] text-center font-[Reddit Sans]">
              0-2 hours
            </span>
          </div>
        </div>
        <div className="relative overflow-x-auto mt-[18px] ml-[16px]">
          <div className="relative min-w-max flex flex-col gap-[10px]">
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none z-0">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-full border-t border-gray-200 absolute"
                  style={{ top: `${(index * 214) / 4}px` }}
                />
              ))}
            </div>

            <div className="flex gap-[20px] z-10">
              {dates.map((_, i) => (
                <div
                  key={i}
                  className="bg-[#FFC97C] rounded-3xl w-[36px] h-[270px] flex-shrink-0"
                ></div>
              ))}
            </div>

            <div className="flex gap-[20px] mb-5 z-10">
              {dates.map((date, i) => (
                <div key={i} className="text-center text-xs w-9 flex-shrink-0">
                  {currentMonth} <br />
                  <span>{date.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
