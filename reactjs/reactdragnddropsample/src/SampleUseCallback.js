import React, { useState, useCallback } from "react";
const funccount = new Set();
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [test, setTest] = useState(0);

  //   const increasecounter = () => {
  //     console.log("count"+count);
  //     // setCount(count + 1);
  //     setTest("test")
  //   };

  //   const increaseno = () => {
  //     console.log("number");
  //     // setNumber(number + 1);
  //     // setTest("test")
  //   };

  const increasecounter = useCallback(
    (e) => {
      e.preventDefault();
      console.log("count" + count);
      // setCount(count + 1);
      setTest("test");
    },
    [count]
  );

  const increaseno = useCallback(
    (e) => {
      e.preventDefault();
      console.log("number");
      setNumber(number + 1);
    },
    [number]
  );

  console.log("OnStart=>" + funccount.size);
  funccount.add(increasecounter);
  console.log("aftercounter=>" + funccount.size);
  funccount.add(increaseno);
  console.log("afternumber=>" + funccount.size);

  return (
    <div>
      Count: {count}
      <button onClick={increasecounter}>Increase counter</button>
      <br />
      Number: {number} {test}
      <button onClick={increaseno}>Increase number</button>
    </div>
  );
};

export default App;
