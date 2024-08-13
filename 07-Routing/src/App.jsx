import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {Landing} from './Components/Landing'
import {Dashboard} from './Components/Dashboard'

function App() {
  return (
  <div>
    <BrowserRouter>
     <Appbar />
     <Routes>
       <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/" element={<Landing />} />
     </Routes>
    </BrowserRouter>
  </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing Page</button>
      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>
    </div> 
  </div>
}

export default App
