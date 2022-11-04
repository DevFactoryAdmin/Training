import axios from "axios";
import { useState } from "react";

const Sample=()=>{
    const [list, setList]=useState([])
    const handleChange=(e)=>{
        var text=e.target.value; 
    }
    return <div>
        <input onChange={(e)=>handleChange(e)} type="text" />
        <flat data={list}></flat>
    </div>
}
export default Sample;