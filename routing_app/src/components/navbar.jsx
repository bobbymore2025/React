import { Link } from "react-router-dom"

export const Navbar =()=>{
    return (
        <div>
            <Link to="/">HOME</Link>
            <br />
            <Link to="/products">PRODUCTS</Link>
            <br />
            <Link to="/products/:id">PRODUCTS DETAILS</Link>
        </div>
        )
}