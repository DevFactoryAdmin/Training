import React, { useState } from "react";

export default function SelectSample() {
  const [array, setArray] = useState([
    { id: 1, name: "hindu" },
    { id: 2, name: "Christian" },
    { id: 3, name: "muslim" },
  ]); // set to blank after correcting axios call function
  const [selectval, setSelectVal] = useState(1);
  const handlechange = (e) => {
    e.preventDefault();
    setSelectVal(e.target.value);
  };
  const handleClick = (e) => {
    //axios call
    //setArray(res.data)
    setArray([
      { id: 1, name: "test" },
      { id: 2, name: "not" },
    ]);
  };
  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click here to load</button>
      Value is: {selectval}
      <br />
      <select
        value={selectval}
        onChange={(e) => {
          handlechange(e);
        }}
      >
        {/* <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option> */}
        {
          // array.map()
          // array.map(()=>{})
          array.map((itm, index) => {
            // return <option value={2}>Two</option>;
            return <option value={itm.id}>{itm.name}</option>;
          })
        }
      </select>

      <br />
      <input type={"date"} />
    </>
  );
}
