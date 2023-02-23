import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { exportComponentAsJPEG } from 'react-component-export-image';
import React, { createRef ,useRef } from 'react';


function App() {

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


    return (
        <div className="App flex flex-col gap-1 justify-center items-center w-[100%] bg-white">
          <div className='py-5 sticky top-0 bg-white z-10 text-center w-[100%] m-2 border-b-[0.2px] border-solid border-gradient-to-r from-blue-500 to-red-500'>
            <h1 className=' text-slate-900 head text-5xl font-bold text- outline-1'> grfxmyn!66</h1>
            <span className='text-sm text-slate-600'> Troll niggas</span>
          </div>

            <label htmlFor="inputag" className="input cursor-pointer gap-3 flex flex-col align-center items-center text-slate-600" >
              <span className='w-[50px] text-sm text-center text-black rounded-full px-1 bg-slate-300'>1</span>Upload an image
              <input type="file" id="inputag" onChange={handleChange} className="hidden"/>
            </label>
          
            <div ref={memeRef} id="meme" className='relative overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex justify-center items-center rounded-md bg-gradient-to-bl from-blue-900 to-slate-200 mb-5 mt-5'>
              <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute top-2 font-black'>{topText}</h1>
              <img src={file} className="w-[100%] object-cover"/>
              <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute bottom-2 font-black'>{bottomText}</h1>
            </div>

            <div className=' flex flex-col justify-center my-5 items-center gap-3'>
              <span className='w-[50px] text-sm text-center text-black rounded-full px-1 bg-slate-300'>2</span>
              <span className='text-slate-600'>Change the text color <span className='text-xs text-slate-400'>if need be</span></span>
                <div className='flex justify-center gap-8 md:gap-12 py-2'>
                  <button onClick={() => setColor("green")} className="bg-green-600 w-[25px] h-[25px] rounded-full "></button>
                  <button onClick={() => setColor(["lightblue"])} className="bg-red-600 w-[25px] h-[25px] rounded-full"></button>
                  <button onClick={() => setColor("blue")} className="bg-blue-600 w-[25px] h-[25px] rounded-full"></button>
                  <button onClick={() => setColor("white")} className="bg-white border-[0.5px] border-solid w-[25px] h-[25px] rounded-full"></button>
                </div>
            </div>
            
            

            <div className='flex flex-col gap-5 justify-center items-center mt-5 w-[100%] min-w-[400px] px-5'>
            <span className='w-[50px] text-sm text-center text-black rounded-full px-1 bg-slate-300'>3</span><span className='text-left'>Input some text to complete your <span className='head'>grfx</span></span>
              <input placeholder="top text" type="text" id="topText" onChange={e => setTopText(e.target.value)} className=' bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 rounded-lg p-2 w-[50%] min-w-[400px]'/>
              <input placeholder="bottom text" type="text" id="bottomText" onChange={e => setBottomText(e.target.value)} className='bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 rounded-lg p-2 w-[50%] min-w-[400px]'/>
            </div>
              
              <button className=' py-3 bg-slate-900 text-green-100 rounded-xl mt-5 min-w-[400px] ease-in duration-150 hover:bg-slate-800 mb-10' onClick={(e) => exportComponentAsJPEG(memeRef)}>Download your <span className='head'>grfx</span></button>

              <div className="footer bg-slate-100 w-[100%] p-5">
                <span className='text-sm text-slate-600'>Check out my other work</span> <br />
                <div className='flex gap-3'>
                  <a href="https://malikawesu.netlify.app" className='ease-in duration-150 hover:text-green-100'>malikawesuportfolio</a>
                  <a href="https://malikawesu.netlify.app" className='ease-in duration-150 hover:text-green-100'>malikawesuportfolio</a>
                  <a href="https://malikawesu.netlify.app" className='ease-in duration-150 hover:text-green-100'>malikawesuportfolio</a>
                </div>
              </div>
        </div>
  
  )
}

export default App
