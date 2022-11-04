import { useState } from "react";
import "./style.css";
function JSONMap() {
  const [countrylist, setCountryList] = useState([
    { id: "1", countryname: "India" },
    { id: "2", countryname: "SriLanka" },
    { id: "3", countryname: "China" },
  ]);
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Country</th>
        </thead>
        <tbody>
          {countrylist.map((itm, index) => {
            return (
              <tr>
                {" "}
                <td>{itm.id}</td> <td>{itm.countryname}</td>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default JSONMap;
