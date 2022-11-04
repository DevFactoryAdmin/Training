import { useMemo, useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleClick = () => {
    inputRef2.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef3} />
      <input type="text" ref={inputRef2} />
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

const UseMemoHook = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
};
function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
export default UseMemoHook;
