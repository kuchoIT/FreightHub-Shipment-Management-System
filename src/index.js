import React from "react";
import { render } from "react-dom";
import Head from './components/header/head';
import "./components/header/index.css";
import Table from './components/header/table'
import "react-table/react-table.css";


class App extends React.Component {
   render() {
                 
    return (
               
      <div className="App">
              <Head />
              <Table />
      </div>
      
    );
  }
}

render(<App />, document.getElementById("root"));