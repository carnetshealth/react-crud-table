import React, { Component } from 'react';
import List from "./components/list.js";
import ModalComponent from './components/ModalComponent.js'
import Table from './components/Table.js'
// Scripts
//import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <List/>
        <ModalComponent />
        <Table />
      </div>
    );
  }
}

export default App;
