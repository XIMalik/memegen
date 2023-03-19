import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import "../Home/h.css";
import Header from "../../components/Header";
import Draggable from "react-draggable";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7495423750925349"
    crossorigin="anonymous"
  ></script>;
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const [params] = useSearchParams();

  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

  const [color, setColor] = useState("black");
  const [size, setSize] = useState(12);
  const mystyle = {
    color: color,
    fontSize: size,
  };

  const nav = useNavigate();
  const go = () => {
    nav("/custom");
  };
  return (
    <div>
      <Header />
      <div className="p-5 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-center text-black/50 text-sm">
          You made it to the lab
        </h1>
        <h1 className="head text-center text-xl sm:text-3xl">
          Now, create your masterpiece
        </h1>
        <button
          onClick={go}
          className="p-3 border-black/10 border-[0.2px] text-black/40 hover:text-white hover:bg-black"
        >
          I think i'd rather be a hero
        </button>
      </div>

      <div className="grid md:grid-cols-2 p-10 mb-10">
        <div className="colspan-1 flex justify-center items-center bg-gradient-to-r from-red-900 to-black text-center py-5 w-[100%] h-[100%]">
          <div
            ref={memeRef}
            className="w-fit relative mx-auto my-auto overflow-hidden"
          >
            <Draggable>
              <h1
                id="memetext"
                style={mystyle}
                className="text-3xl uppercase absolute top-2 font-black"
              >
                {topText}
              </h1>
            </Draggable>
            <img src={params.get("url")} alt="" className="w-[300px] m-auto" />
            <Draggable>
              <h1
                id="memetext"
                style={mystyle}
                className="text-3xl uppercase absolute bottom-2 font-black"
              >
                {bottomText}
              </h1>
            </Draggable>

            {
              // Array(count).fill(0).map(e => <Text style={mystyle} />)
            }
          </div>
        </div>

        <div className="relative  gap-5 flex flex-col items-center colspan-1 border-[0.5px] overflow-scroll border-black/10 border-t-0 sm:border-t-[0.5px]  text-center lg:w-[100%] lg:h-[100%] h-[500px]">
          <span className="head bg-black px-2 py-1 text-white text-xs">
            options
          </span>
          <span className="text-sm text-slate-600">
            Add text to your <span className="head text-black">grfx</span>
          </span>
          <span className="text-sm text-slate-300">
            Drag the text by holding it and position it where you'd like
          </span>
          <div className="flex flex-col gap-5 justify-center items-center w-[100%] max-w-[600px] px-5 md:px-2">
            <input
              placeholder="top text"
              type="text"
              id="topText"
              onChange={(e) => setTopText(e.target.value)}
              className=" bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]"
            />
            <input
              placeholder="bottom text"
              type="text"
              id="bottomText"
              onChange={(e) => setBottomText(e.target.value)}
              className="bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]"
            />
          </div>

          <div className=" flex flex-col justify-center items-center gap-5">
            <span className="text-slate-600 text-sm">Alter font size</span>
            <div className="flex justify-center w-fit gap-8 sm:gap-8">
              <button
                onClick={() => setSize(18)}
                className="head hover:bg-black hover:text-white w-[25px] h-[25px]"
              >
                1
              </button>
              <button
                onClick={() => setSize(28)}
                className="head hover:bg-black hover:text-white w-[25px] h-[25px]"
              >
                2
              </button>
              <button
                onClick={() => setSize(38)}
                className="head hover:bg-black hover:text-white w-[25px] h-[25px]"
              >
                3
              </button>
              <button
                onClick={() => setSize(48)}
                className="head hover:bg-black hover:text-white w-[25px] h-[25px]"
              >
                4
              </button>
              <button
                onClick={() => setSize(58)}
                className="head hover:bg-black hover:text-white w-[25px] h-[25px]"
              >
                5
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 mb-5">
            <span className="text-sm text-slate-600">
              Alter text color{" "}
              <span className="text-slate-300">if need be</span>
            </span>
            <div className=" flex gap-5">
              <button
                onClick={() => setColor("green")}
                className="bg-green-600 w-[25px] h-[25px] "
              ></button>
              <button
                onClick={() => setColor("red")}
                className="bg-red-600 w-[25px] h-[25px] "
              ></button>
              <button
                onClick={() => setColor("blue")}
                className="bg-blue-600 w-[25px] h-[25px] "
              ></button>
              <button
                onClick={() => setColor("white")}
                className="bg-white border-[0.5px] border-solid w-[25px] h-[25px]"
              ></button>
              <button
                onClick={() => setColor("purple")}
                className="bg-purple-500 border-[0.5px] border-solid w-[25px] h-[25px]"
              ></button>
              <button
                onClick={() => setColor("yellow")}
                className="bg-yellow-500 border-[0.5px] border-solid w-[25px] h-[25px]"
              ></button>
            </div>
          </div>

          <span className="text-sm text-slate-600">Hit the button!</span>
          <button
            onClick={(e) => exportComponentAsJPEG(memeRef)}
            className="py-3 bg-black text-green-100 mt-1 w-[80%] min-w-[300px] ease-in duration-150 hover:bg-red-900"
          >
            Download your custom <span className="head">grfx</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
