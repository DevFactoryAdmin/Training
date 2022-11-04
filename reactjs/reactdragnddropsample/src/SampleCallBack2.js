import { useEffect, useState } from "react";
import NewComponent from './ViewNumber'

const App = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const handleNumber = callback(() => {
    setNumber(number + 1);
  },[number]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <ViewNumber number={number} />
      <button onClick={handleNumber}>Change Number</button>
      <ViewCount count={count} />
      <button onClick={handleCount}>Change Count</button>
    </div>
  );
};

const ViewCount = ({ count }) => {
  console.log("count render");
  return <div>Count: {count}</div>;
};
export default App;
