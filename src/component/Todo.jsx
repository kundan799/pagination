import React, { useState } from 'react'
import { useEffect } from 'react';

const Todo = () => {
    const [data, setData]=useState([]);
    const [count,setCount]=useState(1)
    const getdata = () => {
           fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}&_limit=20`)
  .then(response => response.json())
  .then(data => setData(data)); 

    }
    const prev=()=>{
        setCount(count-1)

    }
    const next=()=>{
        setCount(count+1)

    }
    useEffect(() => {
        // Update the document title using the browser API
        getdata()
      },[]);
  return (
    <div>
        <h1>Todo</h1>
        {count}
        <button onClick={getdata}>fetch</button>
        {
            data.map((item)=>(
                <div key={item.id}>{item.title}</div>

            ))
        }
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      
 
  
      
    </div>
  )
}

export default Todo
