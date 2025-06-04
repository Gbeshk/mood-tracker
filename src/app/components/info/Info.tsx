import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import quoteIcon from "../../images/Quote Icon.svg";
import veryHappyIcon from "../../images/icon-very-happy-color.svg";
import happyIcon from "../../images/happy.svg";
import sleepIcon from "../../images/Sleep Icon.svg";
import NeutralIcon from "../../images/neutral.svg";
import reflectionIcon from "../../images/Reflection Icon.svg";
import sadIcon from "../../images/icon-sad-color.svg";
import verySadIcon from "../../images/icon-very-sad-color.svg";
import Image from "next/image";
interface InfoProps {
  modalPage: number;
  setModalPage: React.Dispatch<React.SetStateAction<number>>;
  setmodalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Info({
  modalPage,
  setModalPage,
  setmodalOpen,
}: InfoProps) {
  const [feeling, setFeeling] = useState<string[]>([]);
  const [sleep, setSleep] = useState("");
  const [note, setNote] = useState("");
  const [moodText, setMoodText] = useState("");
  const [quote, setQuote] = useState("");
  const [feelingIcon, setFeelingIcon] = useState(happyIcon);

  useEffect(() => {
    const mood = localStorage.getItem("mood");
    const feeling = localStorage.getItem("feeling");
    const sleep = localStorage.getItem("sleep");
    const note = localStorage.getItem("note");
    setNote(note ?? "");
    setFeeling(feeling ? JSON.parse(feeling) : "");

    if (sleep === "5") {
      setSleep("9+ hours");
    } else if (sleep === "4") {
      setSleep("7-8 hours");
    } else if (sleep === "3") {
      setSleep("5-6 hours");
    } else if (sleep === "2") {
      setSleep("3-4 hours");
    } else if (sleep === "1") {
      setSleep("0-2 hours");
    }

    if (mood === "5") {
      setMoodText("Very Happy");
      setQuote("When your heart is full, share your light with the world.");
      setFeelingIcon(veryHappyIcon);
    } else if (mood === "4") {
      setMoodText("Happy");
      setQuote("Happiness grows when it's shared with others.");
      setFeelingIcon(happyIcon);
    } else if (mood === "3") {
      setMoodText("Neutral");
      setQuote("A calm mind can find opportunity in every moment.");
      setFeelingIcon(NeutralIcon);
    } else if (mood === "2") {
      setMoodText("Sad");
      setQuote("One small positive thought can change your entire day.");
      setFeelingIcon(sadIcon);
    } else if (mood === "1") {
      setMoodText("Very Sad");
      setQuote("You are stronger than you think; the storm will pass.");
      setFeelingIcon(verySadIcon);
    }
  }, [modalPage]);

  useEffect(() => {
    if (modalPage > 4) {
      setModalPage(1);
      setmodalOpen(false);
    }
  }, [modalPage]);
  return (
    <div>
      <div className="flex gap-[36px] max-mmd:gap-[24px]  max-w-[1200px] w-full mx-auto flex-wrap mt-[36px]">
        <div className="w-full mx-auto max-w-[670px] pr-[24px] max-mmd:max-w-[704px] max-ssm:hidden h-[340px] bg-white rounded-2xl flex">
          <div className="flex flex-col justify-between p-[24px]">
            <div>
              <p className="text-[#21214D] font-[700] text-[32px] leading-[140%] tracking-[-0.3px] font-reddit opacity-[70%] mt-[24px] ">
                I&rsquo;m feeling
              </p>
              <p className="text-[#21214D] font-reddit font-[700] text-[40px] leading-[120%] tracking-[-0.3px]">
                {moodText}
              </p>
            </div>
            <div className="mb-[24px]">
              <Image
                src={quoteIcon}
                width={100}
                height={100}
                alt="quote icon"
                className="w-[24px] h-[24px]"
              ></Image>
              <p className="max-w-[246px] w-full mt-[16px] text-[#21214D] font-reddit font-[500] italic text-[18px] leading-[130%] tracking-[0px]">
                {quote}
              </p>
            </div>
          </div>
          <div className="mt-[48px] ml-[40px] overflow-hidden">
            <Image
              src={feelingIcon}
              width={100}
              height={100}
              alt="quote icon"
              className="w-[320px] h-[320px]"
            ></Image>
          </div>
        </div>
        <div className="hidden w-full mx-auto max-w-[670px] max-mmd:max-w-[704px] h-[507px]  bg-white rounded-2xl max-ssm:flex flex-col items-center">
          <div className="flex flex-col mt-[24px]">
            <p className="text-[#21214D] text-center font-[700] text-[32px] leading-[140%] tracking-[-0.3px] font-reddit opacity-[70%]  ">
              I&rsquo;m feeling
            </p>
            <p className="text-[#21214D] text-center font-reddit font-[700] text-[40px] leading-[120%] tracking-[-0.3px]">
              {moodText}
            </p>
          </div>
          <div className="mt-[48px] ">
            <Image
              src={feelingIcon}
              width={100}
              height={100}
              alt="quote icon"
              className="w-[200px] h-[200px]"
            ></Image>
          </div>
          <div className="mb-[24px] flex items-center flex-col mt-[24px]">
            <Image
              src={quoteIcon}
              width={100}
              height={100}
              alt="quote icon"
              className="w-[24px] h-[24px]"
            ></Image>
            <p className="max-w-[246px] w-full text-center mt-[16px] text-[#21214D] font-reddit font-[500] italic text-[18px] leading-[130%] tracking-[0px]">
              {quote}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mx-auto max-w-[468px] w-full max-mmd:max-w-[704px]">
          <div className="w-full  h-[123px] bg-white rounded-2xl py-[20px] px-[16px] flex flex-col justify-between">
            <div className="flex gap-3 ">
              <Image
                src={sleepIcon}
                width={100}
                height={100}
                alt="quote icon"
                className="w-[24px] h-[24px] "
              ></Image>
              <p className="text-[#57577B] font-reddit font-medium text-[18px] leading-[120%] tracking-[0px] ">
                Sleep
              </p>
            </div>
            <h1 className="text-[#21214D] font-reddit font-bold text-[32px] leading-[140%] tracking-[-0.3px] ">
              {sleep}
            </h1>
          </div>
          <div className=" h-[197px] bg-white rounded-2xl flex flex-col justify-between  py-[20px] px-[16px]">
            <div className="flex gap-3">
              <Image
                src={reflectionIcon}
                width={100}
                height={100}
                alt="quote icon"
                className="w-[24px] h-[24px] "
              ></Image>
              <p className="text-[#57577B] font-reddit font-medium text-[18px] leading-[120%] tracking-[0px] ">
                Reflection of the day
              </p>
            </div>
            <p className="text-[#21214D] font-reddit font-medium text-[18px] leading-[120%] overflow-auto tracking-[0px]  h-[80px] max-w-[428px] w-full">
              {note}
            </p>
            <div className="flex gap-2">
              {feeling.map((feeling, index) => (
                <p
                  className="text-[#57577B] font-reddit font-medium italic text-[18px] leading-[130%] tracking-[0px]"
                  key={index}
                >
                  #{feeling}
                </p>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
