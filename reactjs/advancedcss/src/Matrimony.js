import img from './images/mlogo.svg'
import './images/style.css'
export default function Matrimony() {
  return (
    <>
      <div className="home_row1">
        <div className="home_row1_left">
          <div>
            <img src={img} />
          </div>
          <div className="home_row1_left_text">
            <label>ChristianMatrimony.com</label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="home_row1_right">
          <label id="label">Already a member?</label>
          <div>
            <button id="button">Log In</button>
          </div>
        </div>
      </div>
    </>
  );
}
