import { useState } from "react";

const SampleTest = () => {
  const [valueData, setValueData] = useState({
    data: [
      { id: "1", name: "sample" },
      { id: 2, name: "sample2" },
    ],
    count: 2,
  });
  const [spread, setSpreadFnc] = useState(["My", "name", "is", "Jack"]);
  console.log(...spread);
  const arr1 = ["one", "two"];
  const arr2 = [...arr1, "three", "four", "five"];
  console.log(arr2);

  const [array, setArray] = useState([{}]);

  const [count, setCount] = useState(2);
  const [obj, setObject] = useState({});
  const [str, setStr] = useState("");

  const spreadClick = () => {};
  const handleAddNew = () => {
    var t = [...array, {}];
    setArray(t);
    console.log(array);
  };
  const handleAdd = () => {
    var temp = valueData.data;
    temp.push({});
    setValueData({ data: temp, count: temp.length });
    // array = ["one"];
    // var abc=array;
    // abc.push({})
    // setarray(abc)
    // console.log(array)
    // count = 2;
    // obj = { test: "value" };
    // str = "test";
    // array.push({ id: 3, name: "sample3" });
    // setCount(count+1);
    // console.log(array);
  };

  return (
    <>
      <div>
        <p>
          {JSON.stringify(valueData)},{count},{JSON.stringify(obj)},{str}
        </p>
        {JSON.stringify(array)}

        {count}
        {valueData.data.map((item, index) => {
          return (
            <p>
              {index} - {item.id} - {item.name}
            </p>
          );
        })}
        <button onClick={handleAdd}>handleAdd</button>
        <button onClick={handleAddNew}>handleAddNew</button>
        <button onClick={spreadClick}>spreadClick</button>
      </div>
    </>
  );
};

export default SampleTest;
