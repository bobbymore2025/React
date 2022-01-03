import React from  "react"

const User=()=>{
   
    const initState = {
  name: "",
  age:"",
  address: "",
  department:"",
  salary:"",
  marital_Status: "",
 
}


  const [state, setState] = React.useState(initState)
  const handleChange = e => {
    const {name, value} = e.target
    setState( { ...state, [name]: value} )
  }
  return (
    <div>
        <div>
          <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="address" placeholder="address" value={state.address} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
        </div>
    </div>
  )

}</>
}