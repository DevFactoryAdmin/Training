import axios from "axios";
import React, { useState } from "react";
import LoaderModal from './LoaderModal'
export default function Loader() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(true);
    axios
      .post("url", "data", "header")
      .then(() => {
        setShow(false);
      })
      .catch(() => {
        setShow(false);
      });
  };
  return (
    <div>
      loader
      <LoaderModal show={show} />
    </div>
  );
}
