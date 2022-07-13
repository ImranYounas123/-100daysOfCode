// useRef => Html element ka ref dene k liye km aatwaw
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import pizaass from '../Data'
import Product from './Product'
const Products = () => {
    const[pizza , setPizza] = useState([]);
    const history = useHistory();
    useEffect(()=>{
    setPizza(pizaass); 
})

    return(
    <>
    {/* <button onClick ={BackHandle}>Back</button> */}
        {
            pizza.map((item)=>(
                <Product  pizza = {item} key={item._id} />
    ))
        }
    </>
)
}
export default Products;