import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import './h.css'

export default function Home() {

    const nav = useNavigate()
    const go = () =>{
        nav('/memesgallery')
    }
    const goo = () =>{
        nav('/custom')
    }
  return (
    <div className='flex flex-col justify-center'>
        <Header/>
        <div className='flex flex-col items-center justify-center mt-10'>
            <span className='text-sm'>Your new hub for creating custom grfx</span>
            <span className='head text-5xl'>You have a choice</span>
        </div>
        <div className='flex flex-col gap-6 md:flex-row justify-center md:gap-12 mt-10'>
                <button onClick={goo} className='bg-red-300 p-5 ease-in duration-75 hover:bg-black hover:text-white'><span>Be a hero and create an original</span></button>
            
            <button onClick={go} className='bg-green-300 p-5 ease-in duration-75 hover:bg-black hover:text-white'><span>Be a reggie and work with an existence</span></button>
        </div>
        
        
    </div>
  )
}
