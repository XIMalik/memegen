import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Memecard(props) {

    const nav = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center m-5 w-[200px] gap-2 rounded-lg'>
        <span className='text-black'>{props.id}</span>
        <div className='w-[200px] h-[200px] overflow-hidden rounded-lg bg-gradient-to-t from-white to-white'>
         <img src={props.img} className="w-[100%] object-cover " alt="" />
        </div>
        <button 
        onClick={e => nav(`/edit?url=${props.img}`)}
        className=" absolute b-10 bg-black/10 ease-in-out duration-150 text-white px-4 py-2 hover:bg-white/50 mb-3">customize</button>
    </div>
  )
}

