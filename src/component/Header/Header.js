import React from 'react';
import './Header.css';
import Form from '../InputForm/Form';
import DataBox from '../DataBox/DataBox';
const Header=({data,onInputChange,onButtonClick})=>{
    return(
        <div className="Header">
            <Form onButtonClick={onButtonClick} onInputChange={onInputChange}/>
            <DataBox data={data}/>
        </div>
    )
}
export default Header;