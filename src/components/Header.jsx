import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  
  const nav = useNavigate()
  const go = () => {
    nav('/')
  }
  return (
        <div className='py-5 sticky top-0 z-10 text-center w-[100%] border-b-[0.2px] border-solid bg-white/80 backdrop-blur-lg'>
            <button onClick={go}><h1 className=' text-red-700 head text-5xl font-bold text- outline-1'> grfxxxn!666</h1></button><br />
            <span className='text-sm text-slate-600'> Create custom graphics</span>
          </div>
  )
}
