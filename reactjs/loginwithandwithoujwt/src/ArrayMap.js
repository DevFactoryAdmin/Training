import { useState } from "react";

function ArrayMap() {
  const [array, setArray] = useState([
    { id: "1", txtCountryname: "India" },
    { id: "2", txtCountryname: "America" },
    { id: "3", txtCountryname: "Pakistan" },
  ]);

  return (
    <div>
      <select>
        {array.map((itm, indx) => {
          return <option>{itm.txtCountryname}</option>;
        })}
      </select>
    </div>
  );
}

function ArrayMapOld() {
  const [array, setArray] = useState([
    { id: "1", txtCountryname: "India" },
    { id: "2", txtCountryname: "America" },
    { id: "3", txtCountryname: "Pakistan" },
  ]);

  return (
    <div>
      {array.map((itm, indx) => {
        return (
          <p>
            {indx} - {itm.id} - {itm.txtCountryname}
          </p>
        );
      })}
    </div>
  );
}

export default ArrayMap;
