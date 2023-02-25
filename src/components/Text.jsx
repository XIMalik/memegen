import React, {useState} from 'react'
import Draggable from 'react-draggable'

export default function Text() {

    const [editmode, setEditmode] = useState(false)
    const [v, setV] = useState("Double click to edit")
  return (
    <Draggable className>
        {
        editmode ? (
        <input className='bg-none w-fit h-fit' onDoubleClick={e => setEditmode(false)} value={v} onChange={e => setV(e.target.value)}/>
        ) : (
        <h1 className='bg-none w-fit h-fit' onClick={e => setEditmode(true)}>{v}</h1>
        ) }
    </Draggable>
    
  )
}

