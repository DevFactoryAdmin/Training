import axios from "axios";
import { useState } from "react";

function LoginPageWithJWT() {
    const [username, setUsername]=useState('');
    const [password , setPassword]=useState('');
    const [token, setToken]=useState('');

    function handleClick(e){
        e.preventDefault();
        let reqst={"username":username, "password":password};
        let url="http://localhost:8000/logincheck";
        let header={ };
        console.log("req=>"+JSON.stringify(reqst));
        console.log("url=>"+url);
        axios.post(
            url,reqst,header
        ).then(
            (res)=>{
                console.log(res.data)
                setToken(res.data.token);
            }
        ).catch();
    }

    const handleGetButton=()=>{
        let reqst={"username":username, "password":password};
        let url="http://localhost:8000/getdata";
        let header={ Authorization: `Bearer ${token}`};
        console.log("req=>"+JSON.stringify(reqst));
        console.log("url=>"+url);
        axios.post(
            url,reqst, {headers:header}
        ).then(
            (res)=>{
                console.log(res.data) 
            }
        ).catch();
    }
  return (
    <div>
      <h1>Login</h1>
      <div>
          <label>Username</label>
          <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
      </div>
      <div>
          <label>Password</label>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" />
      </div>
      <button onClick={(e)=>handleClick(e)}>Login</button> 
      <button onClick={handleGetButton}>GetData</button>
    </div>
  );
}
export default LoginPageWithJWT;
