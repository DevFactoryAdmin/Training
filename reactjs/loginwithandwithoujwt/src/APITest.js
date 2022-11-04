import axios from "axios";

function APITest() {
 
  function handleClick() {
    const url = "http://localhost:8000/addition";
    const data = { "numone":"5" };
    const header = {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':true
      },
    };
    axios.post(url, data, header).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Test</button>
    </div>
  );
}
export default APITest;
