import { useState } from "react";
import "./c.css";
import { exportComponentAsJPEG } from "react-component-export-image";
import React, { createRef, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

export default function Custom() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7495423750925349"
    crossorigin="anonymous"
  ></script>;
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const [color, setColor] = useState("black");
  const [size, setSize] = useState(12);
  const mystyle = {
    color: color,
    fontSize: size,
  };

  const memeRef = createRef();

  const nav = useNavigate();
  const go = () => {
    nav("/memesgallery");
  };

  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  return (
    <div className="flex flex-col">
      <Header />
      <button
            onClick={go}
            className="bg-white rounded-lg p-3 my-5 hover:bg-black text-[0px] hover:text-sm ease-in duration-200 hover:text-white w-fit ml-10 text-black/40 flex items-center justify-center gap-2 "
          >
            <img width="30" height="30" src="https://img.icons8.com/badges/48/left.png" alt="left"/>
            meme gallery
          </button>

      <div className="flex flex-col gap-5 justify-center items-center w-[100%] px-10 mb-10">
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center w-[100%] ">
          <div className="colspan-1 rounded-lg meme_bg w-[100%] h-[100%] flex justify-center items-center">
            <div
              ref={memeRef}
              id="meme"
              className="relative overflow-hidden w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto flex justify-center items-center rounded-md bg-white shadow-xl  mb-5 mt-5"
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
              <img src={file} className="w-[100%] object-cover" />
              <Draggable>
                <h1
                  id="memetext"
                  style={mystyle}
                  className="text-3xl uppercase absolute bottom-2 font-black"
                >
                  {bottomText}
                </h1>
              </Draggable>
            </div>
          </div>

          <div className="colspan-1 rounded-lg relative w-[100%] p-10 flex flex-col gap-5 justify-center items-center border-[0.2px] border-t-0 sm:border-t-[0.2px] border-black/10">
            <span className=" absolute top-0 head text-sm text-center text-white px-1 bg-black">
              options
            </span>

            <label
              htmlFor="inputag"
              className="bg-slate-100 text-black input cursor-pointer flex gap-2 align-center items-center text-sm hover:bg-slate-100/50 ease-in duration-100 rounded-lg p-2"
            >

            <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/64/upload--v1.png" alt="upload--v1"/>

              Upload an image
              <input
                type="file"
                id="inputag"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            <div className="flex flex-col gap-3 justify-center items-center w-[100%] md:px-2">
              <span className="text-left text-slate-600 text-sm">
                Add text to your <span className="head text-black">grfx</span>
              </span>
              <span className="text-sm text-slate-300 mb-3">
                Drag the text by holding it and position it where you'd like
              </span>

              <input
                placeholder="sorry if"
                type="text"
                id="topText"
                onChange={(e) => setTopText(e.target.value)}
                className="text_input bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]"
              />
              <input
                placeholder="i'm making it hot"
                type="text"
                id="bottomText"
                onChange={(e) => setBottomText(e.target.value)}
                className="text_input bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]"
              />
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <span className="text-slate-600 text-sm">Alter text color</span>
              <div className="flex gap-5 max-w-[300px] flex-wrap items-center justify-center">
              <button onClick={() => setColor("green")} className="bg-green-600 w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("red")} className="bg-red-600 w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("blue")} className="bg-blue-600 w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("white")} className="bg-white border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("purple")} className="bg-purple-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("yellow")} className="bg-yellow-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("pink")} className="bg-pink-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("orange")} className="bg-orange-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("cyan")} className="bg-cyan-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("teal")} className="bg-teal-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("brown")} className="bg-black/50 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
              <button onClick={() => setColor("gray")} className="bg-gray-500 border-[0.5px] border-solid w-[25px] h-[25px] color_select"></button>
            </div>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3">
              <span className="text-slate-600 text-sm">
                Alter font size{" "}
              </span>
              <div className="flex justify-center w-fit gap-8 sm:gap-8 py-2">
                <button
                  onClick={() => setSize(18)}
                  className="head size_select hover:bg-black hover:text-white w-[25px] h-[25px]"
                >
                  1
                </button>
                <button
                  onClick={() => setSize(28)}
                  className="head size_select hover:bg-black hover:text-white w-[25px] h-[25px]"
                >
                  2
                </button>
                <button
                  onClick={() => setSize(38)}
                  className="head size_select hover:bg-black hover:text-white w-[25px] h-[25px]"
                >
                  3
                </button>
                <button
                  onClick={() => setSize(48)}
                  className="head size_select hover:bg-black hover:text-white w-[25px] h-[25px]"
                >
                  4
                </button>
                <button
                  onClick={() => setSize(58)}
                  className=" head size_select hover:bg-black hover:text-white w-[25px] h-[25px]"
                >
                  5
                </button>
              </div>
            </div>

            <button
              className="p-2 bg-black text-green-100 mt-1 w-[80%] rounded-lg min-w-[300px] flex items-center justify-center gap-2 ease-in duration-150 hover:bg-red-900"
              onClick={(e) => exportComponentAsJPEG(memeRef)}
            >
              <img width="28" height="28" src="https://img.icons8.com/plasticine/100/download.png" alt="download"/>
              Download
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
