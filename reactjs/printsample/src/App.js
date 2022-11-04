import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const Example = () => {
  const componentRef = useRef();

  const ComponentToPrint = () => {
    return <div>App</div>;
  };
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
export default Example;
