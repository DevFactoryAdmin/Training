import React from "react";
import "./style/summarypage.css";
export default function SummaryPage() {
  return (
    <>
      <div className="statusdiv">
        <div className="statusdiv_row1">
          <label>Status Overview</label>
        </div>
        <div className="statusdiv_row2">
          <div className="statusdiv_row2_col1">
            <img src={require("./images/1.webp")} />
            </div>{" "}
          <div className="statusdiv_row2_col2">
            <div className="statusdiv_row2_col2_contents">
              <ul>
              <li>
                  <div className="square red"></div> <label>TODO</label>
                </li> <li>
                  <div className="square orange"></div> <label>TODO</label>
                </li> <li>
                  <div className="square green"></div> <label>TODO</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
