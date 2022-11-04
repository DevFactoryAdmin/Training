import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import ManualDataList from "./ManualDataList";

function App() {
  const [array, setArray] = useState([]);
  const [arraynew, setArrayNew] = useState([]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  const debouncedComp = useCallback(
    debounce((txt) => {
      console.log("insidedebounce");
      axios.post("http://localhost:8000/test", { txt: txt }, {}).then((res) => {
        console.log(res);
        setArray(res.data);
        var temp = [];
        for (const itm of res.data) {
          temp.push({ id: itm.id, value: itm.txtName });
        }
        setArrayNew(temp);
        console.log(temp);
      });
    }, 500),
    []
  );
  const handleClick = (e) => {
    console.log("onhandle");
    setInput(e.target.value);
    e.preventDefault();
    debouncedComp(e.target.value);
  };
  const handleCounter = () => {
    console.log("handlecounter");
    setCounter(counter + 1);
  };
  return (
    <>
      <DatalistInput
        placeholder="Search Here.."
        label="Select Item"
        onChange={(e) => handleClick(e)}
        onSelect={(item) => console.log(item.value)}
        items={arraynew}
      />
    </>
  );
}
export default App;
