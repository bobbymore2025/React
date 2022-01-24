import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetail = () => {

    let {id} = useParams();
    const [product, setProduct] = useState({})
    const getData = async() => {
        let res = await fetch(`http://localhost:3001/products/${id}`)
        let data = await res.json()
        setProduct(data)
       
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <div>
            <img src={product.image} />
            <div>
                <p>{product.id}</p>
                <p>Name: : <span>{product.name}</span></p>
                <p>Price: <span>{product.price}</span>₹</p>
                <p>Description : <span>{product.description}</span></p>
            </div>
        </div>
    )
}
