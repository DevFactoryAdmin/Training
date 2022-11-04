import { useState } from "react";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    var req = { username: username, password: password };
    alert(JSON.stringify(req));
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      {username}
      <br />
      {password}
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
export default App;
