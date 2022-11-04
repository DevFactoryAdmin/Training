import { useState } from "react";
import "./newstyle.css";
function Sample() {
  const [projectArray, setProjectArray] = useState([
    { id: "1", name: "project1", epics: [1, 2, 3] },
    { id: "2", name: "project1", epics: [4, 5] },
    { id: "3", name: "project1", epics: [] },
    { id: "4", name: "project1", epics: [] },
    { id: "5", name: "project1", epics: [9, 8, 10] },
  ]);
  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>ProjectName</th>
          <th></th>
        </tr>
        {projectArray.map((item, index) => {
          return (
            <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td></td>
              </tr>
              {item.epics.map((epicItem, epicIndex) => {
                return (
                  <tr>
                    <td></td>
                    <td>{epicItem}</td>
                    <td>epicname</td>
                  </tr>
                );
              })}
            </>
          );
        })}
      </table>
    </>
  );
}
export default Sample;
