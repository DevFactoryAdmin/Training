import SingleUser from "./SingleUser";
import "./horizontalstyle.css";
import { useEffect, useState } from "react";
const App = () => {
  const [array, setArray] = useState([
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "four" },
    { name: "five" },
    { name: "six" },
    { name: "four" },
    { name: "five" },
    { name: "six" },
  ]);

  useEffect(() => {
    var result = [...array];
    for (const element of result) {
      element["isSelected"] = false;
    }
    setArray(result);
  }, []);

  return (
    <div className="container">
      <div className="listcontainer">
        {array.map((item, index) => {
          return <SingleUser index={index} currentItem={item} setArray={setArray} array={array}/>;
        })}
      </div>
    </div>
  );
};
export default App;
