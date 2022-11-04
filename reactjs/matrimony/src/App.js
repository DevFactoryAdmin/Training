import { useNavigate } from "react-router-dom";
import "./css/style.css";
import Header from "./Header";
const App = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/register')
    }
  return (
    <>
     <Header />
      <div
        className="content"
        style={{ backgroundImage: `url("./images/home_christian_bg.webp")` }}
      >
        <div className="innercontent">
          <div className="content_inner_content">
            <label className="head1">
              No. 1 and official matrimony service exclusively for Christians
            </label>
            <label className="head2">Meet your Christian soulmate here!</label>
            <div className="whitecontainer">
              <div className="whitecontainer_col leftround">
                <label>Matrimony Profile For</label>
                <div class="select">
                  <select name="nameValueSelect" class="select__field" required>
                    <option value="" selected>
                      SELECT{" "}
                    </option>
                    <option>Self</option>
                    <option>Relative</option>
                    <option>Friend</option>
                  </select>
                </div>
              </div>
              <div className="whitecontainer_col center">
                <label>Name</label>
                <input placeholder="Name" type="text" />
              </div>
              <div className="whitecontainer_col">
                <label>Mobile Number</label>
                <input placeholder="Mobile number" type="text" />
              </div>
              <div className="whitecontainer_col rightround">
                <button onClick={handleClick}>Register Free</button>
              </div>
            </div>
            <div className="terms">
              <label>By clicking on Register Free, you agree to </label>
              <label className="bluetext">Terms & Conditions</label>
              <label> and </label>
              <label className="bluetext">Privacy Policy</label>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerwrapper">
            <div className="col">
              <img src={require("./images/trustedhome_icon.webp")} />
              <label>
                10+ years of service in helping Christians cherish the meaning
                of Happy marriage
              </label>
            </div>
            <div className="col">
              <img src={require("./images/ring_icon.webp")} />
              <label>
                2 Lakh+ people have found their life partner using our services
              </label>
            </div>
            <div className="col">
              <img src={require("./images/denominationshome_icon.webp")} />
              <label>
                2020's winner of 'India's Growth Champions Award' by The
                Economic Times
              </label>
            </div>
            <div className="col">
              <img src={require("./images/genuinehome_icon.webp")} />
              <label>
                1 Lakh+ genuine profiles with 100% verified phone numbers
              </label>
            </div>
            <div className="col">
              <img src={require("./images/location_icon.webp")} />
              <label>130+ branches across India to serve you better</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
