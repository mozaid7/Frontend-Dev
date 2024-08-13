import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Landing from React.lazy(() => './Components/Landing')
import Dashboard from React.lazy(() => './Components/Dashboard')
import React from 'react';

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

// useNavigate can be used only inside the BrowserRouter Comp
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
