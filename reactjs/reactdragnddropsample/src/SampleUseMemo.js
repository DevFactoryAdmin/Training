import React, { useState, useCallback, useMemo } from "react";
const funccount = new Set();
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const calculation = useMemo(() => handlCalculation(count + 1), [count]);
  const increasecounter = () => {
    console.log("count" + count);
    setCount(count + 1);
  }
  const increasenumber = () => {
    console.log("Number" + number);
    setNumber(number + 1);
  }
  console.log("OnStart=>" + funccount.size);
  funccount.add(increasecounter);
  console.log("aftercounter=>" + funccount.size);
  funccount.add(increasenumber);
  console.log("afternumber=>" + funccount.size);

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increasecounter}>Increase counter</button>
      </div>
      <div>
        Number: {number}
        <button onClick={increasenumber}>Increase number</button>
      </div>
      <div>calculation: {calculation}</div>
    </>
  );
};

function handlCalculation(cnt) {
  console.log("Handle calculation" + cnt);
  return <>{cnt}</>;
}

export default App;
