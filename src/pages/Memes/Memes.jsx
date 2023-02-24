import React, { useEffect, useState} from 'react'
import { getAllMemes } from '../../api';
import Memecard from '../../components/Meme';
import Header from '../../components/Header';

export default function Memes () {

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes))
    }, []);

  return (
    <div className='border-[0.3px] border-black border-t-0 border-solid mx-5'>
        <Header />
        <div className='flex justify-center flex-wrap'>
        {
            data.map( i => <Memecard title={i.name} img={i.url}/>)
        }
    </div>
    </div>
  )
}

