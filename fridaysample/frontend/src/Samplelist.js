import { useState } from "react";
import "./styles/realstyle.css";
function Samplelist() {
  var sampledata = [
    {
      Id: 1,
      StudentName: "name1",
      Age: "a1",
    },
    {
      Id: 2,
      StudentName: "name2",
      Age: "a2",
    },
    {
      Id: 3,
      StudentName: "name3",
      Age: "a3",
    },
  ];

  const [tabledata, settabledata] = useState([
    {
      Id: 1,
      StudentName: "name1",
      Age: "a1",
    },
    {
      Id: 2,
      StudentName: "name2",
      Age: "a2",
    },
    {
      Id: 3,
      StudentName: "name3",
      Age: "a3",
    },
  ]);

  return (
    <div className="outerdiv">
      <div className="firstrow">
        <label>
          User
          {JSON.stringify(tabledata)}
        </label>
      </div>
      <div className="secondrow">
        <div className="secfirstcolumn">
          <nav>
            <li>Home</li>
            <li>Product</li>
            <li>Order</li>
            <li>Logout</li>

            {JSON.stringify(tabledata)}
          </nav>
        </div>
        <div className="secsecondcolumn">
          {JSON.stringify(tabledata)}

          <table>
            <thead>
              <th>Id</th>
              <th>Studentname</th>
              <th>Age</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>name1</td>
                <td>a1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>name2</td>
                <td>a2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>name3</td>
                <td>a3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>name4</td>
                <td>a4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>name5</td>
                <td>a5</td>
              </tr>
            </tbody>
          </table>

          
          <table>
            <thead>
              <th>Id</th>
              <th>StClass</th>
              <th>Mark</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>name1</td>
                <td>a1</td>
              </tr>
              <tr>
            </tr>
{tabledata.map((item,index)=>{return{index}})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Samplelist;
