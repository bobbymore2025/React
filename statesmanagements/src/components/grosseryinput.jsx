import React from "react"
 const GrossInput=({getdata})=>{
 const [title,setTitle]=React.useState("");
 const handleClick=()=>{
  getdata(title);
}
return <div>
        <input placeholder="List Item" 
        onChange={(e)=>setTitle(e.target.value)}/> 
        <button onClick={handleClick}>Add Grossary </button>
</div>
  
}
export default GrossInput;
