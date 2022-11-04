import React from "react";

const App = ({todolist}) => {
  console.log("child");
  return <>Child
  <table>
      {todolist.map((itm,indx)=>{
          return <tr><td>{itm}</td></tr>
      })}
  </table>
  </>;
}; 
export default React.memo(App);
