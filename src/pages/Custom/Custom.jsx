import { useState } from 'react'
import './c.css'
import { exportComponentAsJPEG } from 'react-component-export-image';
import React, { createRef ,useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Custom() {

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [color, setColor] = useState("black");
  const mystyle = {
    color: color,
  };

  const memeRef = createRef()

  const nav = useNavigate()
  const go = () => {
    nav('/memesgallery')
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

    return (
        <div>
            <Header />
            <div className="App flex flex-col gap-1 justify-center items-center w-[100%] bg-white">
            <div className='p-5  '>
            <h1 className='text-center text-black/50 text-sm'>You made it to the lab</h1>
            <h1 className='head text-center text-2xl md:text-4xl'>Now, create your masterpiece</h1>
            </div>

                <label htmlFor="inputag" className="input cursor-pointer gap-3 flex flex-col align-center items-center text-sm text-slate-600 " >
                <span className='w-[50px] text-sm text-center text-white px-1 bg-black'>1</span>Upload an image
                <input type="file" id="inputag" onChange={handleChange} className="hidden"/>
                </label>
            
                <div ref={memeRef} id="meme" className='relative overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex justify-center items-center rounded-md bg-gradient-to-bl from-black to-black/80 mb-5 mt-5'>
                    <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute top-2 font-black'>{topText}</h1>
                    <img src={file} className="w-[100%] object-cover"/>
                    <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute bottom-2 font-black'>{bottomText}</h1>
                </div>

                <div className=' flex flex-col justify-center my-5 items-center gap-3'>
                <span className='w-[50px] text-sm text-center text-white px-1 bg-black'>2</span>
                <span className='text-slate-600 text-sm'>Change the text color <span className='text-xs text-slate-400'>if need be</span></span>
                    <div className='flex justify-center w-fit gap-8 sm:gap-8 py-2'>
                    <button onClick={() => setColor("green")} className="bg-green-600 w-[25px] h-[25px]"></button>
                    <button onClick={() => setColor(["lightblue"])} className="bg-red-600 w-[25px] h-[25px] "></button>
                    <button onClick={() => setColor("blue")} className="bg-blue-600 w-[25px] h-[25px] "></button>
                    <button onClick={() => setColor("white")} className="bg-white border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                    <button onClick={() => setColor("purple")} className="bg-purple-500 border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                    <button onClick={() => setColor("yellow")} className="bg-yellow-500 border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                    </div>
                </div>
                
                

                <div className='flex flex-col gap-5 justify-center items-center mt-5 w-[100%] min-w-[300px] max-w-[600px] px-5 md:px-2'>
                <span className='w-[50px] text-sm text-center text-white px-1 bg-black'>3</span><span className='text-left text-slate-600'>Input some text to complete your <span className='head'>grfx</span></span>
                <input placeholder="top text" type="text" id="topText" onChange={e => setTopText(e.target.value)} className=' bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[400px] min-w-[300px]'/>
                <input placeholder="bottom text" type="text" id="bottomText" onChange={e => setBottomText(e.target.value)} className='bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[400px] min-w-[300px]'/>
                </div>
                
                <button className=' py-3 bg-black text-green-100 mt-5 w-[400px] min-w-[300px] ease-in duration-150 hover:bg-red-900 mb-20' onClick={(e) => exportComponentAsJPEG(memeRef)}>Download your custom <span className='head'>grfx</span></button>

                
            </div>
            <Footer/>
        </div>
  
  )
}