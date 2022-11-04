import React, { useState } from "react";
import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import menu from "./images/menu.png";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
import { BsThreeDots } from "react-icons/bs";
import FullModal from './FullModal';
import Modal from './Modal'
export default function App() {
  const [array, setArray] = useState([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4]);

  const [show,setShow]=useState(false)
  const [modalshow,setModalShow]=useState(false)
  function handleModalClick(e){
    e.preventDefault(); 
    setModalShow(modalshow?false:true);
  }
  return (
    <> 
    <FullModal show={show} setShow={setShow}/>
    <Modal modalshow={modalshow} setModalShow={setModalShow}/>
      <div className="main">
        <div className="main_menunbar">
          <img src={logo} />
          <div className="main_menunbar_menu">
            <ul>
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_contentbar">
          <button onClick={(e)=>{handleModalClick(e)}}  className="fab_button">+</button>
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Project</label>
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>
          <div className="main_contentbar_search">
            <div className="main_contentbar_search_left">
              <img src={search} />
              <input placeholder="Search by order #, name or email..." />
            </div>
            <div className="main_contentbar_search_right">
              <button>
                Filters <img src={downarrow} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_filters">
            <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img className="main_contentbar_filters_inner_add" src={add} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_list">
            <div className="table_head">
              <label></label>
              <label>Head1</label>
              <label>Date</label>
              <label>New Head</label>
              <label>Head</label>
              <label>Last Head</label>
              <label></label>
            </div>
            {array.map((itm, indx) => {
              return (
                <div className={itm == 2 ? "row_full active" : "row_full"}>
                  <div className="table_row">
                    <input type={"checkbox"} />
                    <label>#1006</label>
                    <label>20 Sep, 23:11</label>
                    <label>Paid</label>
                    <label>Make Lemonade</label>
                    <label>Splashify 2.0</label>
                    <label>
                      <BsThreeDots />
                    </label>
                  </div>
                  <div className={itm == 2 ? "visible" : "hidden"}>
                    <div className="epic_row">
                      <label>#1006</label>
                      <label>20 Sep, 23:11</label>
                      <label>Paid</label>
                      <label>Make Lemonade</label>
                      <label>Splashify 2.0</label>
                      <label>
                        <BsThreeDots />
                      </label>
                    </div>{" "}
                    <div className="epic_row">
                      <label>#1006</label>
                      <label>20 Sep, 23:11</label>
                      <label>Paid</label>
                      <label>Make Lemonade</label>
                      <label>Splashify 2.0</label>
                      <label>
                        <BsThreeDots />
                      </label>
                    </div>
                    <div className="buttonrow">
                      <button onClick={(e)=>setShow(show?false:true)}>+ Create Epic</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
