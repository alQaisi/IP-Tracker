import React from 'react';
import './Form.css';
import InputBox from './InputBox';
const Form=({onInputChange,onButtonClick})=>{
    return(
        <div className="Form">
            <p>IP Address Tracker</p>
            <InputBox onButtonClick={onButtonClick} onInputChange={onInputChange} />
        </div>
    )
}
export default Form;