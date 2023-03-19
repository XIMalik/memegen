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
          <span className="text-sm">
            The hub for creating custom <span className="font-bold">grfx</span>
          </span>
          <span className="head text-4xl sm:text-5xl">Make a choice</span>
          <span className=" text-sm text-slate-300">Select an option</span>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-center md:gap-12 mt-10 px-5 sm:px-0">
          <button
            onClick={goo}
            className="bg-black p-5 hover:bg-white hover:text-black text-white hover:border-black/90 border-[0.5px]"
          >
            <span>
              Be a <span className="head">don</span> and create an original
            </span>
          </button>
          <button
            onClick={go}
            className="bg-white p-5 hover:bg-black hover:text-white text-black border-black/90 border-[0.5px] "
          >
            <span>
              Take me to the meme{" "}
              <span className="head text-red-900">gallery</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
