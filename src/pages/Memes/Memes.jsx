import React, { useEffect, useState } from "react";
import { getAllMemes } from "../../api";
import Memecard from "../../components/Meme";
import Header from "../../components/Header";
import "./m.css";
import Footer from "../../components/Footer";

export default function Memes() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7495423750925349"
    crossorigin="anonymous"
  ></script>;
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="relative flex flex-col gap-10">
      <Header />
      {/* <span className=" text-sm flex items-center justify-center bg-white mt-5">
        Pick an image and create your custom meme
      </span> */}
      
      <div className="flex justify-center flex-wrap">
        {data.map((i) => (
          <Memecard title={i.name} img={i.url} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
