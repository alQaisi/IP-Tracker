import React, { PureComponent } from 'react';
import './Form.css';
import InputBox from './InputBox';
class Form extends PureComponent{
    render(){
        const {onInputChange,onButtonClick}=this.props;
        return(
            <div className="Form">
                <p>IP Address Tracker</p>
                <InputBox onButtonClick={onButtonClick} onInputChange={onInputChange} />
            </div>
        )
    }
}
export default Form;