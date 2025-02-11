import React from "react";
import "./App.css";
import NhkCompA from './components/NhkCompA';
function App() {
  return (
    <div className="App">
      <h1>Nguyen Hong Kien - k23CNT3 - ReactJS</h1>
      <hr />
      {/* Sử dụng component NhkCompA */}
      <NhkCompA NhkName="Nguyen Hong Kien" NhkAddress="18 Tay Ho" NhkDate="02/11/2005" NhkPhone="ip 16promax" NhkMSV="2310900055"/>
    </div>
  );
}

export default App; 
