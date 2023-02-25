import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
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
    <div>
        <Header/>
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col items-center justify-center mt-10'>
                <span className='text-sm'>The hub for creating custom <span className="font-bold">grfx</span></span>
                <span className='head text-4xl sm:text-5xl'>Make a choice</span>
            </div>
            <div className='flex flex-col gap-6 md:flex-row justify-center md:gap-12 mt-10'>
                    <button onClick={goo} className='bg-green-500 p-5 ease-in duration-75 hover:bg-black text-white'><span>Be a hero and create an original</span></button>
                
                <button onClick={go} className='bg-red-500 p-5 ease-in duration-75 hover:bg-black text-white'><span>Be a reggie and work with an existence</span></button>
            </div>
        </div>
    </div>

  )
}
