import React, { useRef } from "react";

const App = () => {
  const ref = useRef("");
  const handleClick = () => {
    console.log(ref.current)
    const setDisplay = ref.current.style.display == "none" ? "block" : "none";
    ref.current.style.display = setDisplay;
    console.log(ref.current.type)
  };

  return (
    <>
      <input type="text" value="ref" ref={ref} />
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};
export default App;
