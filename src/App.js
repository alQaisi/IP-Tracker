import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import MapLayer from './component/Map/MapLayer';
import loaderImg from './loader.svg'
class App extends Component{
  constructor(){
    super();
    this.state={
      inputIp:'',
      ip:'192.212.174.101',
      city:'Brooklyn',
      country:'NY',
      timezone:'UTC-500',
      position:[40.72091662099322,-74.00060176849367],
      isp:'SpaceX Starlink',
      loaderVisability:false
    }
    
  }
  mapOnClick=e=>{
    this.setState({position:e.latlng});
    console.log(e.latlng);
  }
  onInputChange=e=>{
    this.setState({inputIp:e.target.value});
  }
  onButtonClick=()=>{
    const {inputIp}=this.state;
    if(inputIp.length!==0){
      this.setState({loaderVisability:true});
      fetch('https://hidden-citadel-03585.herokuapp.com/fetchIP',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            inputIp:inputIp
        })
        }).then(response=>response.json())
          .then(data=>{
            this.setState({
            ip:data.ip,
            city:data.location.city,
            country:data.location.country,
            position:[data.location.lat,data.location.lng],
            timezone:data.location.timezone,
            isp:data.isp,
            loaderVisability:false
          })
        }).catch(err=>{
          this.setState({loaderVisability:false});
          alert('ADD A VALID IP ADDRESS')
        })
    }
  }
  render(){
    let loader=null;
    const {ip,city,country,timezone,position,isp,loaderVisability}=this.state;
    if(loaderVisability){
      loader=<div className="loader">
               <img src={loaderImg} alt="loader"/>
             </div>
    }
    return (
      <div className="App">
        <Header data={{ip,city,country,timezone,isp}} onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/>
        <MapLayer mapOnClick={this.mapOnClick} position={position}/>
        {loader}
      </div>
    )
  }
}
export default App;
