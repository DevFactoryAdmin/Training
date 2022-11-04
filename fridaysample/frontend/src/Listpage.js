import "./styles/stylecss.css";
import { useState } from "react";

function Listpage() {
  const [studentlist, setstudentlist] = useState([
    { Id: "1", Studentname: "Ajay", Age: "15" },
    { Id: "2", Studentname: "Vinu", Age: "16" },
    { Id: "3", Studentname: "Gopi", Age: "15" },
    { Id: "4", Studentname: "Geeta", Age: "16" },
    { Id: "5", Studentname: "Ganga", Age: "15" },
  ]);
  return (
    <div>
      List
      <div className="container"></div>
      <div className="one"></div>
      <div className="two">
        <h1>Students</h1>
        <table>
          <thead>
            <th>Id</th>
            <th>Studentname</th>
            <th>Age</th>
          </thead>
          <tbody>
            {studentlist.map((student, pos) => {
              return (
                <tr>
                  <td>{student.Id}</td>
                  <td>{student.Studentname}</td>
                  <td>{student.Age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Listpage;
