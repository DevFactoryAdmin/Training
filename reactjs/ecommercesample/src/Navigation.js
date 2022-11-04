import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import NewSample from "./DropDownSample";
import Users from './Users'
function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/signup" element={<NewSample />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
