import Header from "./Header";

const App = () => {
  return (
    <>
      <div className="headrow wrapper">
        <div className="logo half">
          <img src="./images/logo_icon.svg" />
          <div className="logo_content">
            <label className="head">ChristianMatrimony.com</label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="right_header half">
           
        </div>
      </div>
      <div className="register_outer">
        <div className="register_outer_head">
          <label>Great! You have completed <span>20%</span></label>
        </div>
        <div className="register_colouter">
          <div className="register_col1">
            <img src={require("./images/trusted_newicon.webp")} />
            <label>Trusted by Christians across the world!</label>
          </div>
          <div className="register_col2">
            <label className="main">
              Please provide us with your basic details
            </label>
            <div className="innerdiv">
              <label>Date of birth</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Denomination</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Division</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Subcaste (optional)</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Mother tongue</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Email id</label> <input type="text" />
            </div>
            <div className="innerdiv">
              <label>Password</label> <input type="text" />
            </div>
            <div className="buttoncontainer">
              <button>CONTINUE</button>
            </div>
          </div>
        </div>
        <label>Copyright © 2022. All rights reserved.</label>
      </div>
    </>
  );
};
export default App;
