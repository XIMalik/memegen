import React, {useState} from 'react'
import Draggable from 'react-draggable'

export default function Text() {

    const [editmode, setEditmode] = useState(false)
    const [v, setV] = useState("Double click to edit")
  return (
    <Draggable>
        {
        editmode ? (
        <input className='block bg-none' onDoubleClick={e => setEditmode(false)} value={v} onChange={e => setV(e.target.value)}/>
        ) : (
        <h1 className='block bg-none' onDoubleClick={e => setEditmode(true)}>{v}</h1>
        ) }
    </Draggable>
    
  )
}

