import React, { Component } from 'react';
import "react-table/react-table.css";
import logo from './logo.png';
import '../header/index.css';
import Content from './content.jsx'



class Head extends Component {
      
  render()
  {
    
  return (
    
      <header className="App-header">
        
        <span><img src={logo} className="App-logo" alt="logo"/></span>                       
         <p className="App-font">Shipment Management System</p>
        <ul className="App-font">
          <li>Search Shipment by ID, Name, UserID etc</li>
          <li>
            Sort by different fields (e.g. id, name) in ascending/descending
            order
          </li>
          <li>List Shipments based on thier STATUS</li>
          <li>Sub Component with CARGO details</li>
        </ul>
        <Content></Content>               
        </header>      
        )
  }
}

export default Head;
