import "./newstylesheet.css";
import bg from "./bg.webp";
export default function NewHome() {
  return (
    <>
      {/* background-image: url('path'); */}
      <div className="home_row2" style={{ backgroundImage: `url(${bg})` }}>
        <div className="home_row2_inner">
          <label className="home_row2_inner_row1">
            No. 1 and official matrimony service exclusively for Christians
          </label>
          <label className="home_row2_inner_row2">
            Meet your Christian soulmate here!
          </label>
          <div className="home_row2_inner_row3">
            <div className="home_row2_inner_row3_col1">
              <label>Matrimony Profile For</label>
              <select>
                <option>SELECT</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div className="home_row2_inner_row3_col2">
              <label>Name</label>
              <input type={"text"} placeholder="Name" />
            </div>
            <div className="home_row2_inner_row3_col3">
              <label>Mobile Number</label>
              <input type={"text"} placeholder="Mobile Number" />
            </div>
            <button className="home_row2_inner_row3_col4">Register Free</button>
          </div>
          <label className="home_row2_inner_row4">
            By clicking on Register Free, you agree to<span>Terms &
            Conditions</span> and <span>Privacy Policy</span>
          </label>
        </div>
      </div>
    </>
  );
}
