import { useState } from "react";
import "./expandStyle.css";

export default function Expnd() {

  const [array, setArray] = useState([{ id: 1 , "list":[1,2,3], isexpnd:false}, { id: 2, list:[6,7,8], isexpnd:true }]);
  const handleClick=(e, idx)=>{
    e.preventDefault();
    let temp=[...array]
    temp[idx].isexpnd=temp[idx].isexpnd?false:true;
    setArray(temp)
  }
  return ( 
    <div className="mostouter">
      {array.map((itm, idx) => {
        return <div className="outer" onClick={(e)=>handleClick(e,idx)}>{itm.id}
        {
            itm.list.map((i,p)=>{
                return <div  className={itm.isexpnd?"inner":"hidden"}>{i}</div>
            })
        }
        </div>;
      })}
    </div>
  );
}
function NewApp() {
  const [array, setArray] = useState([
    { id: "1", list: [1, 2], isexpnd: true },
    { id: "2", list: [3, 4], isexpnd: false },
  ]);
  const handleShow = (e, idx) => {
    e.preventDefault();
    let temp = [...array];
    temp[idx].isexpnd = temp[idx].isexpnd ? false : true;
    setArray(temp);
  };

  return (
    <>
      <div className="outer">
        {array.map((itm, idx) => {
          return (
            <div
              className="inner"
              onClick={(e) => {
                handleShow(e, idx);
              }}
            >
              {itm.id}
              {itm.list.map((inneritm, innerindx) => {
                return (
                  <div className={itm.isexpnd ? "inner_inner" : "hidden"}>
                    {inneritm}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
