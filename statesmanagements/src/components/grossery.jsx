

import React from "react";
import GrossInput  from "./grosseryinput"
import GrossList   from "./grosserylist"
import {nanoid} from "nanoid"
const Grossery= ()=> {
    const [list,setData]=React.useState([]);  
  const handleClick=(data)=>{
      const payload={
          title: data,
          status:false,
          id :nanoid(4)

      }
    setData( [...list,payload] );
  }
    const handleDelete= (id)=>{
      
       const newlist = list.filter((item) => {
       return item.id !== id 
       
    })
    setData(newlist);
}
  
  return <div className="App">
       <GrossInput getdata={handleClick} />
       {list.map((e)=><GrossList key={e.id}{...e} handleDelete={handleDelete} />)}
 </div>
};
export default Grossery ;
