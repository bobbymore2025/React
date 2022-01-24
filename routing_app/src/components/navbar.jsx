import { Link } from "react-router-dom"
import "../App.css"
export const Navbar =()=>{
    return (
        <div id="line">
            <Link to="/"><button>HOME</button></Link>
            <br />
            <Link to="/products"><button>PRODUCTS</button></Link>
            <br />
            <Link to="/products/:id"><button>PRODUCTS DETAILS</button></Link>
        </div>
        )
}