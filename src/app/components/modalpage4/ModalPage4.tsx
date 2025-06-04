import React, { useState } from "react";
import validIcon from "../../images/info-circle.svg";
import Image from "next/image";

interface ModalPage4Props {
  modalPage: number;
  setModalPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalPage4({
  modalPage,
  setModalPage,
}: ModalPage4Props) {
  const [selectedSleep, setSelectedSleep] = useState<number | null>(null);
  const [valid, setValid] = useState(true);

  const sleepOptions = [
    { id: 1, label: "9+ hours", value: 5 },
    { id: 2, label: "7-8 hours", value: 4 },
    { id: 3, label: "5-6 hours", value: 3 },
    { id: 4, label: "3-4 hours", value: 2 },
    { id: 5, label: "0-2 hours", value: 1 },
  ];

  return (
    <>
      {modalPage === 4 && (
        <>
          <h1 className="font-sans font-bold text-[32px] max-ssm:text-[28px] leading-[1.2] tracking-[-0.3px] mt-[36px]">
            How many hours did you sleep last night?
          </h1>
          <div className="flex flex-col gap-[16px]">
            {sleepOptions.map((option, index) => (
              <div
                key={option.id}
                onClick={() => {
                  setSelectedSleep(option.id);
                  setValid(true);
                }}
                className={`flex w-full h-[62px] bg-white ${
                  index === 0 ? "mt-[36px]" : ""
                } border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                  selectedSleep === option.id
                    ? "border-[#4865DB]"
                    : "border-[#E0E6FA]"
                }`}
              >
                <div className="flex gap-[16px] items-center">
                  <div
                    className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                      selectedSleep === option.id ? "bg-[#4865DB]" : "bg-white"
                    }`}
                  >
                    {selectedSleep === option.id && (
                      <div className="w-[8px] h-[8px] bg-white rounded-[50%]" />
                    )}
                  </div>
                  <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                    {option.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!valid && (
            <div className="flex items-center gap-2 mt-[16px]">
              <Image
                src={validIcon}
                width={100}
                height={100}
                alt="icon valid"
                className="w-[16px] h-[16px]"
              />
              <p className="font-[400] text-[15px] leading-[140%] tracking-[-0.3px] font-reddit text-[#E60013]">
                Please select a sleep duration before continuing.
              </p>
            </div>
          )}

          <div
            onClick={() => {
              if (!selectedSleep) {
                setValid(false);
              } else {
                const selectedOption = sleepOptions.find(
                  (opt) => opt.id === selectedSleep
                );
                if (selectedOption) {
                  localStorage.setItem(
                    "sleep",
                    JSON.stringify(selectedOption.value)
                  );
                  setModalPage(modalPage + 1);
                }
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
