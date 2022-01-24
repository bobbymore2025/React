import { useEffect, useState } from "react"
import {Link } from "react-router-dom"
export const Products =()=>{
    const [product,setProduct]=useState([]);
    
    useEffect(()=>{
        getProduct();
    },[])

    const getProduct = ()=>{
        fetch("http://localhost:3001/products")
        .then(d=>d.json())
        .then((res)=>{setProduct(res)});
    }
    return (
        <>
        <table className="table">
         <tr> <th>ID</th>
              <th >Name</th>
              <th>Price</th>
             
              <th>Image</th>
              <th>Description</th>
              <th>Product Details</th>
            </tr>
        {product.map((e)=>(
            
            <tr >
            <td>{e.id}</td>
              <td >{e.name}</td>
              <td>{e.price}</td>
              <td><img src={e.image}/></td>
              <td>{e.description}</td>
              <Link to={`/products/${e.id}`}>More Details</Link>
            </tr>
            
         
        ))}
         </table>
        
        </>
    )
}