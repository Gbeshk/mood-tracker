"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "../components/Header/header";
import Greeting from "../components/greeting/Greeting";
import WhiteDivs from "../components/whitedivs/WhiteDivs";
import Modal from "../components/Modal/Modal";
import Info from "./info/Info";

export default function Mood() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalPage, setModalPage] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
      router.push("/");
      return;
    }
    const mood = localStorage.getItem("mood");
    const feeling = localStorage.getItem("feeling");
    const sleep = localStorage.getItem("sleep");
    const note = localStorage.getItem("note");

    if (mood && feeling && sleep && note) {
      setShowInfo(true);
    }
  }, [modalPage]);
  return (
    <>
      <Header />
      <Greeting modalPage={modalPage} setmodalOpen={setmodalOpen} />
      {showInfo && (
        <Info
          setModalPage={setModalPage}
          modalPage={modalPage}
          setmodalOpen={setmodalOpen}
        />
      )}

      <WhiteDivs modalPage={modalPage} />
      <Modal
        modalOpen={modalOpen}
        modalPage={modalPage}
        setmodalOpen={setmodalOpen}
        setModalPage={setModalPage}
      />
    </>
  );
}
