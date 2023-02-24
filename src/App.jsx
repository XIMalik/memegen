import { useState } from 'react'
import React, { createRef ,useRef } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Custom from './pages/Custom/Custom';
import Memes from './pages/Memes/Memes';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/custom' element={<Custom />} />
        <Route path='/memesgallery' element={<Memes />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
