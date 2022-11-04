import React from "react";
import one from "./images/1.webp";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.webp";
import "./ScrollSample.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ScrollSample() {
  const [views, setViews] = useState([]);
  const [activeElement, setActiveElement] = useState("#");
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  useEffect(() => {
    if (inView1) {
      setActiveElement("#one");
      setViews([...views, "one"]);
    }
    if (inView2) {
      setActiveElement("#two");
      setViews([...views, "two"]);
    }
    if (inView3) {
      setActiveElement("#three");
      setViews([...views, "three"]);
    }
    if (inView4) {
      setActiveElement("#four");
      setViews([...views, "four"]);
    }
    if (inView5) {
      setActiveElement("#five");
      setViews([...views, "five"]);
    }
  }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <>
      <div className="header">
        <ul>
          <li>
            <a
              href="#one"
              onClick={() => setActiveElement("#one")}
              className={activeElement === "#one" ? "active" : ""}
            >
              one
            </a>
          </li>
          <li>
            <a
              href="#two"
              onClick={() => setActiveElement("#two")}
              className={activeElement === "#two" ? "active" : ""}
            >
              two
            </a>
          </li>
          <li>
            <a
              href="#three"
              onClick={() => setActiveElement("#three")}
              className={activeElement === "#three" ? "active" : ""}
            >
              three
            </a>
          </li>
          <li>
            <a
              href="#four"
              onClick={() => setActiveElement("#four")}
              className={activeElement === "#four" ? "active" : ""}
            >
              four
            </a>
          </li>
          <li>
            <a
              href="#five"
              onClick={() => setActiveElement("#five")}
              className={activeElement === "#five" ? "active" : ""}
            >
              five
            </a>
          </li>
        </ul>
        {/* <label>The Active Content is: {activeElement}</label> */}
      </div>
      <div className="content">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={[...views].includes("one") ? { x: 0, opacity: 1 } : ""}
          transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          id="one"
          ref={ref1}
        >
          Firt Image
          <br />
          <img src={one} />
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={[...views].includes("two") ? { x: 0, opacity: 1 } : ""}
          transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          id="two"
          ref={ref2}
        >
          Second Image
          <br />
          <img src={two} />
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={[...views].includes("three") ? { x: 0, opacity: 1 } : ""}
          transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          id="three"
          ref={ref3}
        >
          Third Image
          <br />
          <img src={three} />
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={[...views].includes("four") ? { x: 0, opacity: 1 } : ""}
          transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          id="four"
          ref={ref4}
        >
          Fourth Image
          <br />
          <img src={four} />
        </motion.div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={[...views].includes("five") ? { x: 0, opacity: 1 } : ""}
          transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          id="five"
          ref={ref5}
        >
          Fifth Image
          <br />
          <img src={five} />
        </motion.div>
      </div>
    </>
  );
}
