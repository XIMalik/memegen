import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import Text from '../../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image'
import '../Home/h.css'
import Header from '../../components/Header';
import Draggable from 'react-draggable'
import Footer from '../../components/Footer';



export default function Edit () {

    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    const [params] = useSearchParams();
    const [count, setCount] = useState(0)
    const addText = () => {setCount(count + 1)}

    const memeRef = createRef();

    const [color, setColor] = useState("black");
    const mystyle = {
      color: color,
    };

  return (
    <div>
        <Header />
        <div className='p-5'>
        <h1 className='text-center text-black/50 text-sm'>You made it to the lab</h1>
        <h1 className='head text-center text-2xl md:text-4xl'>Now, create your masterpiece</h1>
        </div>
    
        <div className="grid md:grid-cols-2 p-10 mb-10">
            <div className='colspan-1 flex justify-center items-center bg-gradient-to-r from-red-900 to-black text-center py-5 w-[100%] h-[100%]'>
                <div ref={memeRef} className="w-fit relative mx-auto my-auto">
                    <Draggable>
                        <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute top-2 font-black'>{topText}</h1>
                    </Draggable>
                    <img src={params.get("url")} alt="" className='w-[300px] m-auto' />
                    <Draggable>
                    <h1 id="memetext" style={mystyle} className='text-3xl uppercase absolute bottom-2 font-black'>{bottomText}</h1>
                    </Draggable>

                    {
                        // Array(count).fill(0).map(e => <Text style={mystyle} />)
                    }
                </div>
            </div>
        
            <div className='relative  gap-3 flex flex-col items-center colspan-1 border-[0.5px] overflow-scroll border-black/10 border-t-0 text-center lg:w-[100%] lg:h-[100%] h-[500px]'>
                <span className='head bg-black px-2 py-1 text-white text-xs'>options</span>
                <span className='text-sm'>Add text and make your <span className='head'>grfx</span></span>
                <div className='flex flex-col gap-5 justify-center items-center mt-5 w-[100%] max-w-[600px] px-5 md:px-2'>
                        <input placeholder="top text" type="text" id="topText" onChange={e => setTopText(e.target.value)} className=' bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[50%] min-w-[250px]'/>
                        <input placeholder="bottom text" type="text" id="bottomText" onChange={e => setBottomText(e.target.value)} className='bg-slate-100 ease-in duration-150 hover:bg-slate-200 border-0 outline-0 p-2 w-[50%] min-w-[250px]'/>
                    </div>
                
                <div className='flex flex-col justify-center gap-8 sm:gap-8 py-2'>
                        <span className='text-sm'>Change text color<span className='text-slate-300'>if need be</span></span>
                        <div className=' flex gap-5'>
                        <button onClick={() => setColor("green")} className="bg-green-600 w-[25px] h-[25px] "></button>
                        <button onClick={() => setColor("red")} className="bg-red-600 w-[25px] h-[25px] "></button>
                        <button onClick={() => setColor("blue")} className="bg-blue-600 w-[25px] h-[25px] "></button>
                        <button onClick={() => setColor("white")} className="bg-white border-[0.5px] border-solid w-[25px] h-[25px]"></button>
                        <button onClick={() => setColor("purple")} className="bg-purple-500 border-[0.5px] border-solid w-[25px] h-[25px]"></button>
                        <button onClick={() => setColor("yellow")} className="bg-yellow-500 border-[0.5px] border-solid w-[25px] h-[25px]"></button>
                        </div>
                        </div>

                {/* <button onClick={addText} className="min-w-[300px] bg-black px-5 py-2 w-[50%] ease-in-out duration-300 hover:bg-slate-900 text-white">add text</button><br /> */}
                <button onClick={(e) => exportComponentAsJPEG(memeRef)} className=" text-sm min-w-[300px] mt-10 bg-black px-6 py-2 w-[50%] ease-in-out duration-300 text-white hover:bg-red-900">Download your custom <span className='head'>grfx</span></button>
            </div>
        
        </div>
        <Footer />
    </div>
    
  )
}

