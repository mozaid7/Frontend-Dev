import { useEffect, useState, useCallback, useMemo, memo } from 'react'
import React, { Fragment } from 'react'
import axios from "axios";


function App() {
  const [count, setCount] = useState(0)
  
// useCallback tells the prg. that the function is same & do not re-render even if the parent re-renders
  const inputVal = useCallback(() => {
    console.log("child clicked")
  }, [])
    
  return <div>
    <Child onClick={inputVal} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})



// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
  
//   // useMemo will let this code run only when the inputValue changes, otherwise this code will not render unnecessarily
//   let count = useMemo(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//      count = count + i;
//     }
//     return count;
//   }, [inputValue]);

//  return <div>
//   <input onChange={function(e) {
//     setInputValue(e.target.value);
//   }} placeholder='Find sum from 1 to n'></input>
//   <br />
//   Sum from 1 to {inputValue} is {count}
//   <br />
//   <button onClick={() => {
//     setCounter(counter + 1);
//   }}>Counter ({counter})</button>
//  </div>
// }

// useEffect hook implementation
// function App() {
// const [selectedId, setSelectedId] = useState(1);

//   return <div>
//     <button onClick={function() {
//       setSelectedId(1);
//     }}>1</button>

//    <button onClick={function() {
//       setSelectedId(2);
//     }}>2</button>

//    <button onClick={function() {
//       setSelectedId(3);
//     }}>3</button>

//    <button onClick={function() {
//       setSelectedId(4);
//     }}>4</button>

//     <Todo id={selectedId} />
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState([])

//   useEffect(() => {
//       axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//        .then(response => {
//         setTodo(response.data.todo)
//        })
//   }, [id])

//   return <div>
//     Id: {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h5>
//       {todo.description}
//     </h5>
//   </div>
// }

export default App