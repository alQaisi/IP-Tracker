import {HeaderContainer} from './Header.style';
import Form from "../InputForm/InputForm.component";
import DataBox from '../DataBox/DataBox.component';

function Header(){
    return(
        <HeaderContainer>
            <Form/>
            <DataBox/>
        </HeaderContainer>
    );
}
export default Header;