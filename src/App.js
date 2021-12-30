import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => { document.title="TODO app" }, [])
  const changeHandler = e => {
    setData(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    const newtodos = [...todos, data];
    setTodos(newtodos);
    setData("");
  }
  const deleteHandler = (indexvalue)=>{
     const newTodos=todos.filter((todo,index)=>index!==indexvalue);
     setTodos(newTodos);
  }
  return (
   
    <div>
      <center>
        <h2>ToDo management</h2><br />
        <form onSubmit={submitHandler}>
          <input type="text" name="data" value={data} onChange={changeHandler} /> &nbsp; &nbsp;
          <input type="submit" value="add" />
        </form>
        <div>{
          todos.map((value, index) => <div key={index}>{value}&nbsp;<button onClick={()=>deleteHandler(index)}>delete</button></div>)
        }
        </div>
      </center>
    </div>
  )
}

export default App