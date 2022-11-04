import React from "react";

const ViewNumber = ({ number }) => {
    console.log("number render");
    return <div> Number: {number}</div>;
  };

  export const NewComponent=React.memo(ViewNumber)