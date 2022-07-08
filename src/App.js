import Header from "./components/Header/Header.component";
import MapLayer from "./components/Map/MapLayer";
import loaderImg from './loader.svg';
import { AppContext } from "./context/app.context";
import { useContext } from 'react';

function App(){
    const {loaderVisability}=useContext(AppContext);
    let loader=null;
    if(loaderVisability){
      loader=(<div className="loader">
               <img src={loaderImg} alt="loader"/>
             </div>);
    }
    return(
        <div className="App">
            <Header/>
            <MapLayer/>
            {loader}
        </div>
    );
}
export default App;