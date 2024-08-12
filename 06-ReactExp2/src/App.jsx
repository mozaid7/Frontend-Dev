import { useEffect, useState, useCallback } from 'react'
import React, { Fragment } from 'react'
import axios from "axios";
import './App.css'


function App() {
  return <div>
    <Todo id={5} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState([])

  useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
       .then(response => {
        setTodo(response.data.todo)
       })
  }, [])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h5>
      {todo.description}
    </h5>
  </div>
}