import React from "react"
import './list.css';
 const GrossList=({title, status, id, handleDelete})=>{
  
  return<><div id="output">
    <h3>{title}</h3>
    <button onClick={ ()=> handleDelete(id) }>Delete Item </button>
  </div>
  </>
}
export default GrossList;