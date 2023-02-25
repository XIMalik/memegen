import React, { useEffect, useState} from 'react'
import { getAllMemes } from '../../api';
import Memecard from '../../components/Meme';
import Header from '../../components/Header';
import './m.css'
import Footer from '../../components/Footer';

export default function Memes () {

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes))
    }, []);

  return (
    <div className=''>
        <Header />
        <span className='head text-2xl flex justify-center text-white bg-black px-5 py-5 w-[100%] mb-3'>Time to cook</span>
        <span className=' text-sm flex items-center justify-center bg-white'>Pick an image and create your custom meme</span>
        <div className='flex justify-center flex-wrap'>
        {
            data.map( i => <Memecard title={i.name} img={i.url}/>)
        }
    </div>
    <Footer />
    </div>
  )
}

