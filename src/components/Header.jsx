import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  
  const nav = useNavigate()
  const go = () => {
    nav('/')
  }
  return (
        <div className='py-5 sticky top-0 z-10 text-center w-[100%] border-b-[0.2px] border-teal-500/10 border-solid bg-white backdrop-blur-2xl'>
            <button onClick={go}><span className='flex'>
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/ricardo-milos.png" alt="ricardo-milos"/>
              <img width="35" height="35" src="https://img.icons8.com/quill/50/trollface.png" alt="trollface"/>
              <img width="35" height="35" src="https://img.icons8.com/ios/50/salt-bae.png" alt="salt-bae"/></span>
              </button><br />
          </div>
  )
}
