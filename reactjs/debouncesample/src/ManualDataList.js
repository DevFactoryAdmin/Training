import { useEffect, useState } from "react";
import "./manualdatalist.css";

const App = ({ items, onChange , onSelect, buttonClick}) => {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");
  const [isvisible, setIsVisible]=useState(false);
  useEffect(() => {
      setArray([...items])
  }, [items]);
  const checkStart=(value,element)=>{       
      return element.value.startsWith(value);
  }
  const setChange = (e) => {
    e.preventDefault();
    setIsVisible(true)
    setValue(e.target.value);
    setArray(array.filter(element=>checkStart(e.target.value,element))); 
     onChange(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(false) 
    setValue(e.target.innerText); 
    onSelect(e)
  };
  const handleButtonClick=(e)=>{
      e.preventDefault();
      buttonClick(e);
  }
  const onBlur=(e)=>{ 
     setTimeout(() => {
        e.preventDefault();
        console.log(e)
        setIsVisible(false)
     }, 1000);
  }
  const onFocus=(e)=>{ 
      e.preventDefault();
    //   setIsVisible(true)
  }
  return (
    <>
      <div className="datalist">
        <div class=""> 
          <input
            autocomplete="off"
            id=":r11:"
            placeholder="Search Here.."
            class="inputbox"
            type="text"
            role="combobox"
            onBlur={(e)=>{onBlur(e)}}
            onFocus={(e)=>{onFocus(e)}}
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-controls=":r13:"
            value={value}
            onChange={(e) => setChange(e)}
          />
          <ul
            aria-hidden="true"
            className={array.length > 0 &&isvisible? "" : "none"} 
            id=":r13:"
            role="listbox"
            aria-live="off"
          >
            {array.map((itm, indx) => {
              return (
                <li
                  aria-label={itm.value}
                  tabindex="-1"
                  id={itm.id}
                  onClick={(e) => handleClick(e)}
                  class="dropdown-content"
                  role="option"
                >
                  <mark>{value}</mark>{itm.value.split(value)}
                </li>
              );
            })}
            <button onClick={(e)=>handleButtonClick(e)}>ADDNEW</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
