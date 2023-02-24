import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import Text from '../../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image'


export default function Edit () {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0)
    const addText = () => {setCount(count + 1)}

    const memeRef = createRef();

  return (
    <div>
        <div ref={memeRef}>
            <img src={params.get("url")} alt="" className='w-[200px]' />
            {
                Array(count).fill(0).map(e => <Text />)
            }
        </div>
        <button onClick={addText}>add text</button>
        <button onClick={(e) => exportComponentAsJPEG(memeRef)}>save</button>
    </div>
    
  )
}

