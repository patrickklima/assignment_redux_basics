import React, { Component } from 'react';
import './App.css';
import JumbotronFluid from './elements/JumbotronFluid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid 
          heading="Grocery List"
          lead="One stop shopping listing"
        /> 
        
      </div>
    );
  }
}

export default App; 
