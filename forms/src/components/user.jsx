import React from  "react"
import Forminput from "./comonents/forminput"
const Form=()=>{
   
    const initState = {
  name: "",
  age:"",
  address: "",
  department:"",
  salary:"",
  marital_Status: "",
 
}
const handleSubmit=()=>{
   

}


  const [state, setState] = React.useState(initState)
  const handleChange = e => {
    const {name, value} = e.target
    setState( { ...state, [name]: value} )
  }
  console.log(state);
  return
  <Forminput onSubmit={handleSubmit} onChange={handleChange} />
}
export default Form;