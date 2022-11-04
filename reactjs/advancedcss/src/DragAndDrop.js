import { useState } from "react";
import "./style.css";

function DragAndDrop() {
  const [firstArray, setFirstArray] = useState({
    data: ["One", "Two"],
    count: 2,
  });
  const [secondArray, setSecondArray] = useState({
    data: ["Three", "Four", "Five"],
    count: 3,
  });
  const [thirdArray, setThirdArray] = useState({ data: ["Six"], count: 1 });
  const [dragElement, setDragElement] = useState({});
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    console.log(e);
    e.preventDefault();
    var target = e.target.className;
    var startedDiv = dragElement.startedDiv;
    if (
      target != startedDiv &&
      (e.target.className == "firstDiv" ||
        e.target.className == "secondDiv" ||
        e.target.className == "thirdDiv")
    ) {
      if (startedDiv == "firstDiv") {
        delete firstArray.data[dragElement.index];
      } else if (startedDiv == "secondDiv") {
        delete secondArray.data[dragElement.index];
      } else if (startedDiv == "thirdDiv") {
        delete thirdArray.data[dragElement.index];
      }
      if (target == "firstDiv") {
        var temp = firstArray.data;
        temp.push(dragElement.item);
        setFirstArray({ data: temp, count: temp.length });
      } else if (target == "secondDiv") {
        var temp = secondArray.data;
        temp.push(dragElement.item);
        setSecondArray({ data: temp, count: temp.length });
      }
      if (target == "thirdDiv") {
        var temp = thirdArray.data;
        temp.push(dragElement.item);
        setThirdArray({ data: temp, count: temp.length });
      }
    }
  };
  const handleDrag = (e, index, startedDiv, item) => {
    // console.log(startedDiv);
    // console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item: item });
  };

  const handleDragging=(e, i)=>{
    console.log(i)
    // console.log(e.target)
    // console.log(e.target.nextSibling)
    // if(e.target.id=="p"){
    //   console.log("move")
    // }else {
    //   console.log("drop")
    // }
  }

  return (
    <div className="drageAndDrop">
      <div
        className="firstDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {firstArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              // onDrag={(e)=>{handleDragging(e)}}
              onDragStart={(e) => handleDrag(e, index, "firstDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="secondDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)} 
        onDrag={(e,i)=>{handleDragging(e,i)}}
      >
        {secondArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "secondDiv", item)}
              id={item}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="thirdDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {thirdArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDrag={(e)=>{handleDragging(e)}}
              onDragStart={(e) => handleDrag(e, index, "thirdDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default DragAndDrop;
