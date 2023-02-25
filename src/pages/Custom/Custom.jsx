import { useState } from 'react'
import './c.css'
import { exportComponentAsJPEG } from 'react-component-export-image';
import React, { createRef ,useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable'

export default function Custom() {

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [color, setColor] = useState("black");
  const [size, setSize] = useState(12)
  const mystyle = {
    color: color,
    fontSize: size,
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
                <h1 className='head text-center text-xl sm:text-3xl'>Now, create your masterpiece</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-[100%] px-2 '>
                    <div className='colspan-1 w-[100%] h-[100%] border-[0.2px] border-black/30 lg:bg-black'>
                    <div ref={memeRef} id="meme" className='relative overflow-hidden w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto flex justify-center items-center rounded-md bg-gradient-to-bl from-black to-red-900 mb-5 mt-5'>
                        <Draggable>
                            <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute top-2 font-black'>{topText}</h1>
                        </Draggable>
                        <img src={file} className="w-[100%] object-cover"/>
                        <Draggable>
                            <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute bottom-2 font-black'>{bottomText}</h1>
                        </Draggable>
                    </div>
                    </div>
                    
                    <div className='colspan-1 relative w-[100%] p-10 flex flex-col justify-center items-center border-[0.2px] border-t-0 border-black/30'>
                    
                    <span className=' absolute top-0 head text-sm text-center text-white px-1 bg-black'>options</span>

                        <label htmlFor="inputag" className="bg-black text-white input cursor-pointer mb-10 flex flex-col align-center items-center text-sm  px-1 py-1" >
                        Upload an image
                        <input type="file" id="inputag" onChange={handleChange} className="hidden"/>
                        </label>

                        <div className='flex flex-col gap-5 justify-center items-center w-[100%] md:px-2 mb-5'>
                        <span className='text-left text-slate-600 text-sm'>Add text to your <span className='head text-black'>grfx</span></span>
                        <input placeholder="sorry if" type="text" id="topText" onChange={e => setTopText(e.target.value)} className=' bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]'/>
                        <input placeholder="i'm making it hot" type="text" id="bottomText" onChange={e => setBottomText(e.target.value)} className='bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[80%] min-w-[300px]'/>
                        </div>
                        
                        <div className=' flex flex-col justify-center items-center gap-3 mb-5'>
                        <span className='text-slate-600 text-sm'>Alter text color</span>
                            <div className='flex flex-wrap justify-center w-fit gap-8 sm:gap-8 py-2'>
                            <button onClick={() => setColor("green")} className=" bg-green-600 w-[25px] h-[25px]"></button>
                            <button onClick={() => setColor("red")} className="bg-red-600 w-[25px] h-[25px] "></button>
                            <button onClick={() => setColor("blue")} className="bg-blue-600 w-[25px] h-[25px] "></button>
                            <button onClick={() => setColor("white")} className="bg-white border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                            <button onClick={() => setColor("purple")} className="bg-purple-500 border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                            <button onClick={() => setColor("yellow")} className="bg-yellow-500 border-[0.5px] border-solid w-[25px] h-[25px] "></button>
                            </div>
                        </div>

                        <div className=' flex flex-col justify-center my-5 items-center gap-3'>
                        <span className='text-slate-600 text-sm'>Alter font size <span className='text-xs text-slate-400'>if need be</span></span>
                            <div className='flex justify-center w-fit gap-8 sm:gap-8 mb-10 py-2'>
                            <button onClick={() => setSize(18)} className="head hover:bg-black hover:text-white w-[25px] h-[25px]">1</button>
                            <button onClick={() => setSize(28)} className="head hover:bg-black hover:text-white w-[25px] h-[25px]">2</button>
                            <button onClick={() => setSize(38)} className="head hover:bg-black hover:text-white w-[25px] h-[25px]">3</button>
                            <button onClick={() => setSize(48)} className="head hover:bg-black hover:text-white w-[25px] h-[25px]">4</button>
                            <button onClick={() => setSize(58)} className=" head hover:bg-black hover:text-white w-[25px] h-[25px]">5</button>
                            
                            </div>
                        </div>
                        
                        <span className='text-slate-600 text-sm'>Hit the button!</span>
                        <button className=' py-3 bg-black text-green-100 mt-1 w-[80%] min-w-[300px] ease-in duration-150 hover:bg-red-900' onClick={(e) => exportComponentAsJPEG(memeRef)}>Download your custom <span className='head'>grfx</span></button>   
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  
  )
}