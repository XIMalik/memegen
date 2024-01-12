import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./h.css";

export default function Home() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7495423750925349"
    crossorigin="anonymous"
  ></script>;
  const nav = useNavigate();
  const go = () => {
    nav("/memesgallery");
  };
  const goo = () => {
    nav("/custom");
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mt-10">
          <span className=" text-sm text-slate-300">Select an option</span>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-center md:gap-6 mt-10 px-5 sm:px-0">
          <button
            onClick={goo}
            className="bg-black p-5 hover:bg-white ease-in duration-100 hover:text-black text-white rounded-xl hover:border-black/90 border-[0.5px]"
          >
            <span>
              I want to create an original grfx
            </span>
          </button>
          <button
            onClick={go}
            className="bg-white p-5 ease-in duration-100 hover:bg-black hover:text-white text-black rounded-xl border-black/90 border-[0.5px] "
          >
            <span>
              Take me to the meme{" "}
              <span className="head">gallery</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
