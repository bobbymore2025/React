import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import Counter from "./components/counter.jsx";

function App() {
  const [count, setCount] = React.useState(0);
  const handleCount = (value) => {
    if(value==2){
      setCount(count*value)
    }
    else{
    setCount(count + value);
    }
  };

  return (
    <div className="App">
      <h3>Counter:</h3>
      <Counter
        value={count}
        handleIncrement={() => handleCount(+1)}
        handleDecrement={() => handleCount(-1)}
        handleDouble={() => handleCount(2)}
      />
     
    </div>
  );
}

export default App;
