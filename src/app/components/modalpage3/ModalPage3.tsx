import React, { useState } from "react";
import validIcon from "../../images/info-circle.svg";
import Image from "next/image";

interface ModalPage3Props {
  modalPage: number;
  setModalPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalPage3({
  modalPage,
  setModalPage,
}: ModalPage3Props) {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);

  return (
    <>
      {modalPage == 3 && (
        <>
          <h1 className="font-sans font-bold text-[32px] max-ssm:text-[28px] leading-[1.2] tracking-[-0.3px] mt-[36px]">
            Write about your day...
          </h1>
          <textarea
            className="w-full bg-white min-h-[170px] border-[#9393B7] border-[1px] mt-[36px] p-2 resize-none rounded-xl"
            placeholder="Today, I felt…"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setValid(true);
            }}
          />
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
                Please write a few words about your day before continuing.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              if (text.trim().length === 0) {
                setValid(false);
              } else {
                setModalPage(modalPage + 1);
                localStorage.setItem("note", text);
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
