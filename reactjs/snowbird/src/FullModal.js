import React from "react";
import "./style.css";
import close from './images/close.png'
export default function Modal({show, setShow}) {
  return (
    <>
      {" "}
      <div className={show?"fullmodal":"hidden"} id="modal">
        <div className="fullmodal_modalContent_outer">
          <div className="closeleft">
            <div onClick={(e)=>{setShow(show?false:true)}} className="closeleft_container">
              <label>X</label>
            </div>
          </div>
          <div className="fullmodal_modalContent">
            <label className="addproject_label">Add Epic</label>
            <div className="projectname_div">
              <label>Epic Name</label>
              <input type="text" />
            </div>
            <div className="projectname_div">
              <label className="assignedto">AssignedTo</label>
              <select className="project_select">
                <option>--options--</option>
              </select>
            </div>
            <div className="projectname_div">
              <label>Description</label>
              <textarea rows={4}></textarea>
            </div>
            <div className="button_div">
              <button onClick={(e)=>{setShow(show?false:true)}} className="cancelbutton">Cancel</button>
              <button onClick={(e)=>{setShow(show?false:true)}}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
