import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import Text from '../../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image'
import '../Home/h.css'
import Header from '../../components/Header';


export default function Edit () {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0)
    const addText = () => {setCount(count + 1)}

    const memeRef = createRef();

  return (
    <div>
        <Header />
        <div className='p-5  '>
        <h1 className=' head text-center text-black/50 text-xl'>You made it to the lab</h1>
        <h1 className=' head text-center text-4xl'>Now, create your masterpiece</h1>
        </div>
    
    <div className="grid md:grid-cols-2 h-[400px] p-10 ">
        <div className='colspan-1 flex justify-center items-center border-[0.5px] border-black text-center py-5 w-[100%] h-[100%]'>
            <div ref={memeRef} className="w-fit mx-auto my-auto">
                <img src={params.get("url")} alt="" className='w-[200px] m-auto' />
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center colspan-1 text-center w-[100%] h-[100%]'>
            <span className='text-sm'>Add text and make it yours</span>
            <button onClick={addText} className="min-w-[300px] bg-black px-5 py-2 w-[50%] ease-in-out duration-300 hover:bg-slate-900 text-white">add text</button><br />
            <button onClick={(e) => exportComponentAsJPEG(memeRef)} className="min-w-[300px] bg-black px-6 py-2 w-[50%] ease-in-out duration-300 text-white hover:bg-green-900">save</button>
        </div>
        
    </div>
    </div>
    
  )
}

