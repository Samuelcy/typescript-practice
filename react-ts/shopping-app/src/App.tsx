import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Greeter person="Name1" />
      <Greeter person="Name2" />
      <Greeter person="Name3" />
      {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
