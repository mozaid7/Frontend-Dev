import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing} from './Components/Landing'
import {Dashboard} from './Components/Dashboard'


function App() {

  return (
  <div>
    <div  style={{background: "black", color: "white"}}>
      Hi there this is the top bar!!
    </div>
    <BrowserRouter>
     <Routes>
       <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/Landing" element={<Landing />} />
     </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
