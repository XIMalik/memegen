import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Memecard(props) {

    const nav = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center m-2 w-[250px] bg-[#f8f8f8]/40 p-3 gap-2 rounded-lg'>
        <span className='text-black'>{props.id}</span>
        <div className='w-[230px] h-[230px] overflow-hidden rounded-lg bg-gradient-to-t from-white to-white'>
         <img src={props.img} className="w-[100%] object-cover " alt="" />
        </div>
        <button 
        onClick={e => nav(`/edit?url=${props.img}`)}
        className=" absolute b-10 bg-[#f8f8f8]/40 ease-in-out duration-150 text-white px-4 py-2 rounded-xl hover:bg-white/50 mb-3">customize</button>
    </div>
  )
}

