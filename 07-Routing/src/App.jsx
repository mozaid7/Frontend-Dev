import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// lazy lets you defer loading component’s code until it is rendered for the first time.
import {lazy, Suspense, useContext, useState} from 'react';
import { CountContext } from './context';
import { countAtom } from './store/atoms/count';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
const Landing = lazy(() => import ('./Components/Landing'))
const Dashboard = lazy(() => import ('./Components/Dashboard'))

// Context API with State Management Recoil Library
function App() {
   return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
     {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {(count % 2 == 0) ? "It is Even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}



// Context-API basics
// function App() {
//   const [count, setCount] = useState(0);

//   // wrap anyone that wants to use the teleported value inside a provider
//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count({setCount}) {
//   return <div>
//     <CountRenderer />
//     <Buttons setCount={setCount} />
//   </div>
// }

// function CountRenderer() {
//   const count = useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({setCount}) {
//   const count = useContext(CountContext);
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }



// Prop-Drilling
// function App() {
//  const [count, setCount] = useState((0));

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

 // Because <Buttons> comp. needs {setCount}, we have to pass it in <Count> however <Count> does not need {setCount}. This is known as Prop-drilling.
// function Count({count, setCount}) {
//  return <div>
//   {count}
//   <Buttons count={count} setCount={setCount} />
//  </div>
// }

// function Buttons({count, setCount}) {
//  return <div>
//    <button onClick={() => {
//      setCount(count + 1)
//    }}>Increase</button>
//    <button onClick={() => {
//      setCount(count - 1)
//    }}>Decrease</button>
//   </div>
// }


// Routing 
// <Suspense> lets you display a fallback until its children have finished loading.
// function App() {
//   return (
//   <div>
//     <BrowserRouter>
//      <Appbar />
//      <Routes>
//        <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//        <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//      </Routes>
//     </BrowserRouter>
//   </div>
//   )
// }

// // useNavigate can be used only inside the BrowserRouter Comp
// function Appbar() {
//   const navigate = useNavigate();
//   return <div>
//     <div>
//       <button onClick={() => {
//         navigate("/");
//       }}>Landing Page</button>
//       <button onClick={() => {
//         navigate("/dashboard");
//       }}>Dashboard</button>
//     </div> 
//   </div>
// }

export default App
