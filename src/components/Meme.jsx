import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Memecard(props) {

    const nav = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center m-5 w-[200px] gap-2 rounded-lg border-b-0 border-[0.2px] border-black'>
        <span className='text-black'>{props.id}</span>
        <div className='w-[200px] overflow-hidden px-2'>
         <img src={props.img} className="rounded-lg object-cover w-[100%]" alt="" />
        </div>
        <button 
        onClick={e => nav(`/edit?url=${props.img}`)}
        className="bg-black text-white px-4 py-2 hover:bg-slate-600 mb-3 rounded-full">Customize</button>
    </div>
  )
}

