import { useMemo, useState } from "react";
import Child from "./Child";
const App = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);
  const [todolist, setTodo] = useState(["one", "two"]);
  const [value, setValue] = useState(0);
  var test = useMemo(() => {
    return {
      id: value,
    };
  }, [value]);
  // var test={
  //   id: value,
  // };
  const handleTestChange = (e) => {
    e.preventDefault();
    setValue(value + 1);
    console.log(test);
  };
  return (
    <>
      Parent - Count:{count}
      <br />
      Test: {JSON.stringify(value)}
      <br />
      <Child todolist={todolist} test={test} />
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      <button onClick={(e) => setTodo([...todolist, "added"])}>
        AddtoTodo
      </button>
      <button onClick={(e) => handleTestChange(e)}>ChangeTest</button>
    </>
  );
};

export default App;
