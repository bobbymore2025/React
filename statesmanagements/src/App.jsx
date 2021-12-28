import logo from './logo.svg';
import './App.css';
import React from "react";
function App() {
  const handelData =(data)=>{
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Parent</h1>
      <Child1 func={handelData} />
    </div>
  );
}
function Child1 ({func}){
  const data="MasaiSchool";
  func(data);
  return <h1>{data}</h1>
};
export default App;
