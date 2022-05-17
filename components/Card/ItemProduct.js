import React from 'react';
import { useEffect, useState,useContext } from "react";
import { CartContextForProduct } from '../../pages/allproduct/allproduct';



const ItemProduct = ({singleItems}) => {
    const {name,price,id}=singleItems
    const { removeItem,AddItem,decrement}=useContext(CartContextForProduct)
    return (
     
            
         <div className="card">
         <img className="img_style" src={singleItems?.image} alt="Avatar" />
         <div className="container">
           <h4><b>{name}</b></h4> 
           <p>{price}</p> 
           <button onClick={()=>AddItem(id)}>Add to cart</button>
         </div>
       </div>
      
      
    );
};

export default ItemProduct;