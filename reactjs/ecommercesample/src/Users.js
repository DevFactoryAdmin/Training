import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { ReactSession } from "react-client-session";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Project() {
  // const navigate = useNavigate();
  const [array, setArray] = useState([
    { id: "1", txtName: "Test", txtUserName: "Test", isExpaned: false },
    { id: "2", txtName: "Test 2", txtUserName: "Test", isExpaned: false },
  ]);
  const [id, setPrjctId] = useState({});
  var url = "http://localhost:8000/projectdetailfetchNew";
  var request = { poid: 4 };
  var header = {};
  useEffect(() => {
    axios
      .post(url, request, header)
      .then((res) => {
        // setArray(res.data);
        // console.log(res.data);
      })
      .catch();
  }, []);

  function createnew() {
    // navigate("/addproject");
  }

  function editproject(n) {
    console.log(n);
    setPrjctId(n);
    ReactSession.set("id", n);
    console.log("id:" + JSON.stringify(id));
    // navigate('/editproject');
  }
  const handleExpand = (e, item, index) => {
    e.preventDefault();
    var temp = [...array];
    temp[index].isExpaned = temp[index].isExpaned ? false : true;
    setArray(temp);
  };
  const handleChildExpand = (e, item, index, childIndex) => {
    e.preventDefault();
    var temp = [...array];
    console.log(childIndex);
    console.log(temp[index].list);
    temp[index].list[childIndex].isExpaned = temp[index].list[childIndex]
      .isExpaned
      ? false
      : true;
    setArray(temp);
  };
  const handleTaskExpand = (e, item, index) => {
    e.preventDefault();
  };

  const navigate=useNavigate();
  const handleRowClick=(e, itemid)=>{
    e.preventDefault();
    localStorage.setItem("test",itemid)
    navigate('/signup')
  }

  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}

          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>
          <div className="secondcolumn">
            <div className="prowone">
              <label>Projects</label>
              <button onClick={createnew}>Create New</button>
            </div>
            <div className="tablerow">
              <table>
                <tr>
                  <th className="withborder constant"></th>
                  <th className="withborder constant">#id</th>
                  <th className="withborder">Project name</th>
                  <th className="withborder">Project owner</th>
                </tr>

                {array.map((item, index) => {
                  return (
                    <tr onClick={(e)=>{handleRowClick(e, item.id)}} >
                      <td>{item.id}</td>
                      <td>{item.txtName}</td>
                      <td>{item.txtUserName}</td>
                    </tr>
                  );
                })}
              </table>
              <div className="pbutton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
