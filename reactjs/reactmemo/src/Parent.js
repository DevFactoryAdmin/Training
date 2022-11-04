import { useState } from "react";
import Child from "./Child";
const App = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);
  const [todolist, setTodo] = useState(["one","two"]);
  return (
    <>
      Parent - Count:{count}<br/>
      <Child todolist={todolist}/>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      <button onClick={(e) => setTodo([...todolist,"added"])}>AddtoTodo</button>
    </>
  );
};

export default App;
