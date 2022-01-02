import logo from './logo.svg';
import './App.css';
import Button from "./styled/button";
import React from "react";
function App() {
  const [theme, setThem] = React.useState("light");
  return (
    <div className="App">
      
      <Button theme={theme}>clickme!!</Button>

      <button onClick={()=> setThem(theme === "light" ? "dark" : "light")}>toggle theme!</button>
    </div>
  );
}

export default App;
