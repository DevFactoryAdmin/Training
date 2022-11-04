import { useEffect, useState } from "react";

export default function NewSample() {
  const [val, setValue] = useState("one");
  const [localvariable, setLocalVariable] = useState("");
  const setValueChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("variablename", "");
  };
  useEffect(() => {
    setLocalVariable(localStorage.getItem("variablename"));
  }, []);
  const handleclick = () => {
    setLocalVariable(localStorage.getItem("variablename"));
  };
  return (
    <div>
      {val}
      <br></br>
      <select value={val} onChange={(e) => setValueChange(e)}>
        <option value={"select"}>select</option>
        <option value={"one"}>one</option>
        <option value={"two"}>Two</option>
      </select>
      <br></br>
      localStorage: {localvariable}
      <button onClick={handleclick}>Click</button>
    </div>
  );
}
