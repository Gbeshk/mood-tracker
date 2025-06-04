import React, { useState } from "react";
import checkIcon from "../../images/Check Icon.svg";
import validIcon from "../../images/info-circle.svg";
import Image from "next/image";
interface ModalPage2Props {
  modalPage: number;
  setModalPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalPage2({
  modalPage,
  setModalPage,
}: ModalPage2Props) {
  const emotions = [
    "Joyful",
    "Down",
    "Anxious",
    "Calm",
    "Excited",
    "Frustrated",
    "Lonely",
    "Grateful",
    "Overwhelmed",
    "Motivated",
    "Irritable",
    "Peaceful",
    "Tired",
    "Hopeful",
    "Confident",
    "Stressed",
    "Content",
    "Disappointed",
    "Optimistic",
    "Restless",
  ];

  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [valid, setValid] = useState(true);
  const [amount, setAmount] = useState(0);
  const [validText, setValidText] = useState(" ");

  const toggleEmotion = (emotion: string) => {
    const isSelected = selectedEmotions.includes(emotion);
    if (isSelected) {
      setSelectedEmotions((prev) => prev.filter((e) => e !== emotion));
    } else {
      setSelectedEmotions((prev) => [...prev, emotion]);
    }

    setValid(true);
    setValidText("");
  };

  return (
    <>
      {modalPage === 2 && (
        <>
          <h1 className="font-sans font-bold text-[32px] max-ssm:text-[28px] leading-[1.2] tracking-[-0.3px] mt-[36px]">
            How did you feel?
          </h1>
          <p className="font-sans mt-[8px] font-medium text-lg leading-[120%] tracking-normal text-[#57577B]">
            Select up to three tags:
          </p>

          <div className="flex flex-wrap gap-[8px] mt-[32px] items-center">
            {emotions.map((emotion) => {
              const isSelected = selectedEmotions.includes(emotion);
              return (
                <div
                  key={emotion}
                  onClick={() => toggleEmotion(emotion)}
                  className={`bg-white flex items-center gap-[4px] rounded-xl py-[16px] px-[14px] cursor-pointer text-[#21214D] font-reddit text-[18px] font-normal leading-[140%] tracking-[-0.3px] border-[2px] ${
                    isSelected ? "border-[#4865DB]" : "border-[#E0E6FA]"
                  }`}
                >
                  <div
                    className={`w-[16px] h-[16px] rounded-[4px] border-[2px] flex items-center justify-center ${
                      isSelected
                        ? "bg-[#4865DB] border-[#4865DB]"
                        : "border-[#C7D3F7]"
                    }`}
                  >
                    {isSelected && (
                      <Image
                        src={checkIcon}
                        width={100}
                        height={100}
                        alt="checkicon"
                      ></Image>
                    )}
                  </div>
                  {emotion}
                </div>
              );
            })}
          </div>
          {!valid && (
            <div className="flex items-center gap-2  mt-[16px]">
              <Image
                src={validIcon}
                width={100}
                height={100}
                alt="icon valid"
                className="w-[16px] h-[16px]"
              ></Image>
              <p className="font-[400] text-[15px] leading-[140%] tracking-[-0.3px] font-reddit text-[#E60013]">
                {validText}
              </p>
            </div>
          )}
          <div
            onClick={() => {
              if (selectedEmotions.length === 0) {
                setValid(false);
                setValidText("Please select a mood before continuing.");
              } else if (selectedEmotions.length > 3) {
                setValid(false);
                setValidText("You can only select a maximum of 3 tags.");
              } else {
                setValid(true);
                setValidText("");
                setModalPage(modalPage + 1);
                localStorage.setItem(
                  "feeling",
                  JSON.stringify(selectedEmotions)
                );
              }
            }}
            className={`flex w-full h-[62px] text-white rounded-xl items-center justify-center px-[16px] cursor-pointer ${
              !valid ? "mt-[16px]" : "mt-[36px]"
            } bg-[#4865DB] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal`}
          >
            Continue
          </div>
        </>
      )}
    </>
  );
}
