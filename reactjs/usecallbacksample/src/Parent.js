import { useState, useCallback } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [list, setList]=useState([{"id":1,"value":"one"},{"id":2,"value":"two"},{"id":3,"value":"three"}])
const [val,setVal]=useState("one")
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(()=>{
    setTodos((t) => [...t, "New Todo"]);
  },[todos])

  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <>
    <label>AssignedTo</label>
    <select value={val} onChange={(e)=>handleChange(e)} >
      {list.map((itm)=>{
        return <option value={itm.id}>{itm.value}</option>
      })}
      </select>
      <Child todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default App;