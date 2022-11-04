import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./App";
import Register from "./Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
