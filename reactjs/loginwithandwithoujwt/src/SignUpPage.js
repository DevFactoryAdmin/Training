import { useState } from "react";

function SignUpPage() {
  const [countrylist, setCountryList] = useState([
    "Select",
    "India",
    "America",
    "SriLanka",
  ]);

  return (
    <div>
      <h1>SignUp</h1>

      {countrylist.map((itm, indx) => {
        return <p>{indx}</p>;
      })}

      {countrylist.map((item, index) => {
        return <h1>{index}</h1>;
      })}

      {countrylist.map((itm, index) => {
        return (
          <p>
            {index}" Position "{itm}
            {index}
          </p>
        );
      })}

      <div>
        <label>COUNTRY</label>
        <select>
          {countrylist.map((itm, indx) => {
            return <option>{itm}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Country</label>
        <select>
          <option>Select</option>
          <option>India</option>
          <option>America</option>
          <option>Pakistan</option>
          <option>SriLanka</option>
          <option>China</option>
        </select>
      </div>
      <div>
        <label>State</label>
        <select>
          <option>Select</option>
          <option>Kerala</option>
          <option>Tamil Nadu</option>
          <option>Karnataka</option>
        </select>
      </div>
      <button>SignUp</button>
    </div>
  );
}
export default SignUpPage;
