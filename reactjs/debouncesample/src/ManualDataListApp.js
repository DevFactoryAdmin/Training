import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import ManualDataList from "./ManualDataList";

function App() {
  const [array, setArray] = useState([]);
  const [arraynew, setArrayNew] = useState([]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  const debouncedComp = useCallback(
    debounce((txt) => {
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
    setInput(e.target.value);
    e.preventDefault();
    debouncedComp(e.target.value);
  };
  return (
    <>
      <ManualDataList
        items={arraynew}
        onSelect={(e) => {
          console.log(e);
        }}
        onChange={(e) => handleClick(e)}
        buttonClick={(e)=>{alert(e.target)}} 
      />
    </>
  );
}
export default App;
