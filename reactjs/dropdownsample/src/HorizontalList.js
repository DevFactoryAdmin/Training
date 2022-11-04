import { useState } from "react";
import SingleUser from "./SingleUser";
import "./style.css";

function HorizontalList() {

  const [arrayname, setArrayFunc]=useState(["one","two","three","four","five","six"]);

  return (
    <div className="userlist">
      {
        arrayname.map((item,index)=>{
          return <SingleUser propname={item} />
        })
      }
      </div>
  );
}

export default HorizontalList;
