import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
