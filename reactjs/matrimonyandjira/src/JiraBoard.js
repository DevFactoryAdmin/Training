import React from "react";
import "./style/jiraboardstyle.css";
import { MdApps } from "react-icons/md";
import logo from "./images/logo_snow.png";
export default function JiraBoard() {
  return (
    <>
      <div className="board_row1">
        <div className="board_row1_left">
          <MdApps className="board_row1_left_icon" />
          <img src={logo} />
        </div>
        <div className="board_row1_right">
          <div className="board_row1_right_circle">
            <label>AD</label>
          </div>
        </div>
      </div>
    </>
  );
}
