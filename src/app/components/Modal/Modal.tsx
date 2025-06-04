import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import ModalPage1 from "../modalpage1/ModalPage1";
import ModalPage2 from "../modalpage2/ModalPage2";
import ModalPage3 from "../modalpage3/ModalPage3";
import ModalPage4 from "../modalpage4/ModalPage4";
import close from "../../images/close.svg";
interface ModalProps {
  modalPage: number;
  modalOpen: boolean;
  setmodalOpen: Dispatch<SetStateAction<boolean>>;
  setModalPage: Dispatch<SetStateAction<number>>;
}
export default function Modal({
  modalOpen,
  modalPage,
  setmodalOpen,
  setModalPage,
}: ModalProps) {
  return (
    <div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 px-[36px]  flex items-center justify-center">
          <div className="absolute inset-0 bg-[#21214D] opacity-70 "></div>
          <div
            style={{ maxHeight: "calc(100vh - 48px)" }}
            className="relative bg-gray-200 p-[40px]  rounded-lg mb-[20px]  overflow-y-auto shadow-xl w-full max-w-[600px]  z-10"
          >
            <Image
              src={close}
              width={100}
              height={100}
              alt="close"
              className="absolute w-[15px] h-[15px] left-[90.4%] cursor-pointer"
              onClick={() => {
                setmodalOpen(false);
              }}
            ></Image>
            <h1 className="font-sans font-bold text-[40px] max-ssm:text-[32px] leading-[1.2] tracking-[-0.3px]">
              Log your mood
            </h1>
            <div className="flex gap-4 mt-[36px]">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-[118px] h-[6px] ${
                    modalPage >= i ? "bg-[#4865DB]" : "bg-[#C7D3F7]"
                  }`}
                ></div>
              ))}
            </div>
            <ModalPage1 modalPage={modalPage} setModalPage={setModalPage} />
            <ModalPage2 modalPage={modalPage} setModalPage={setModalPage} />
            <ModalPage3 modalPage={modalPage} setModalPage={setModalPage} />
            <ModalPage4 modalPage={modalPage} setModalPage={setModalPage} />
          </div>
        </div>
      )}
    </div>
  );
}
