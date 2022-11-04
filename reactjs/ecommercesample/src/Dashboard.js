import { useEffect, useState } from "react";
import "./style/style.css";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";


function Dashboard() {  
  const [sample, setSample]=useState('');
  const [usr, setUsrName]=useState('');
  const navigate=useNavigate();

//   <tr>  <td>item.Id</td>  <td>item.txtprdName</td>  <td>item.Rate</td>  <td>item.Tax</td></tr>
  const [productlist, setProductList] = useState( [
    { Id: "1", txtprdName: "sample", Rate: "100", Tax: "18" },
    { Id: "2", txtprdName: "sample2", Rate: "100", Tax: "18" },
    { Id: "3", txtprdName: "sample3", Rate: "100", Tax: "18" },
  ]);
  useEffect(() => {
    if(ReactSession.get("username")==undefined){
      navigate('/')
    }
    setUsrName(ReactSession.get("username"))

    setSample('')
    var token=ReactSession.get("token")
    var url = "http://localhost:8000/getproducts";
    var request = { };
    var header ={ Authorization: `Bearer ${token}`};      
    
    axios
      .post(url, request, {headers:header})
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) { 
          setProductList(res.data)
        } else { 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="maindiv">
      <div className="headerpart"> 
        <label>{usr}</label>
      </div>
      <div className="bodypart">
        <div className="menu">
          <nav>
            <li>Home</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
        <div className="content">
          <h1>Products</h1>
           
          <table>
            <thead>
              <th>Id</th>
              <th>ProductName</th>
              <th>Rate</th>
              <th>Tax</th>
            </thead>
            <tbody>
              {
                  productlist.map((prdct,pos)=>{
                      return <tr>  <td>{prdct.Id}</td>  <td>{prdct.txtprdName}</td>  <td>{prdct.Rate}</td>  <td>{prdct.Tax}</td></tr>
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
