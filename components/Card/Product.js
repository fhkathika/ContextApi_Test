import React from 'react';
import { useEffect, useState,useContext } from "react";
import { CartContext } from '../../pages/addtocart/cart';


const Product = ({singleItems}) => {
    const {name,price,id}=singleItems
    const {increment}=useContext(CartContext)
    return (
     
            
         <div className="card">
         <img className="img_style" src={singleItems?.image} alt="Avatar" />
         <div className="container">
           <h4><b>{name}</b></h4> 
           <p>{price}</p> 
           <button onClick={()=>increment(id)}>Add to cart</button>
         </div>
       </div>
      
      
    );
};

export default Product;