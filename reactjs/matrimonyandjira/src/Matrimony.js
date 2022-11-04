import React from "react";
import "./style/matrimony.css";
import bg from "./images/bg.webp";

export default function Matrimony() {
  return (
    <>
      <div className="row1">Row1</div>
      <div className="row2" style={{ backgroundImage: `url(${bg})` }}>
        <div className="row2_inner">
          <div className="row2_inner_row1">
            <label>
              No. 1 and official matrimony service exclusively for Christians
            </label>
          </div>
          <div className="row2_inner_row2">
            <label>Meet your Christian soulmate here!</label>
          </div>
          <div className="row2_inner_row3">
            <div className="row2_inner_row3_col1">
              <label>Matrimony Profile For</label>
              <select>
                <option>SELECT</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div className="row2_inner_row3_col2">
              <label>Name</label>
              <input type={"text"} placeholder="Name" />
            </div>
            <div className="row2_inner_row3_col3">
              <label>Mobile Number</label>
              <input type={"text"} placeholder="Mobile Number" />
            </div> 
            <button>Register Free</button>
          </div>
          <div className="row2_inner_row4">
            <label>
              By clicking on Register Free, you agree to{" "}
              <span>Terms & Conditions</span> and <span>Privacy Policy</span>
            </label>
          </div>
        </div>
      </div>
      <div className="row3">Row3</div>
    </>
  );
}
