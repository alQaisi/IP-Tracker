import React from 'react';
import './Form.css';
import { FaAngleRight } from 'react-icons/fa';
const InputBox=({onButtonClick,onInputChange})=>{
    return(
        <div className="InputBox">
            <input type='text' placeholder="Search for any IP address" onChange={onInputChange}/>
           <button onClick={onButtonClick}><FaAngleRight className="arrowButton"/></button>
        </div>
    )
}
export default InputBox;