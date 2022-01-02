
   
import styled from  "styled-components";
const Button=styled.button`
color:${(props)=>(props.theme ==="light" ? "blue":"white")}
background:blue;
border:none;
`
export default Button;