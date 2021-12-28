import React from "react";
 const Counter=({value,handleIncrement,handleDecrement, handleDouble})=>{
     return<>
        <h1>{value}</h1>    
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleDouble}>Double</button>
     </>
 };
 export default Counter;