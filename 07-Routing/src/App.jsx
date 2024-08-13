import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing} from './Components/Landing'
import {Dashboard} from './Components/Dashboard'


function App() {

  return (
  <div>

    <div>
      <button onClick={() => {
        window.location.href = "/";
      }}>Landing Page</button>
      <button onClick={() => {
        window.location.href = "/dashboard";
      }}>Dashboard</button>
    </div>

    <BrowserRouter>
     <Routes>
       <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/" element={<Landing />} />
     </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
