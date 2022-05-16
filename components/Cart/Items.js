import React from "react";
import { useEffect, useState,useContext } from "react";

import { CartContext } from "../../pages/addtocart/cart";

const Items = ({info}) => {
    const {name,price,id,quantity}=info
    const { removeItem,increment,decrement}=useContext(CartContext)
   
    return (
        <>
   <section>
      
       <div className="cart-items">
           <div className="cart-items-container">
               <div className="items-info">
                {/* <div className="product-img">
<img className="width_200 height_200" src={img}/>
                </div> */}
                <div className="title">
                    <h2>{name}</h2>

                </div>
                <div className="add-minus-quantity">
                    
                    <button onClick={()=>decrement(id)}>- </button>
                    <input className=" input" type="text" placeholder={quantity}/>
                 
                    <button onClick={()=>increment(id)} >+</button>

                </div>
                <div className="price">
                    <h3>{price}tk</h3>
                </div>
                <div className="price">
                  <button onClick={()=>removeItem(id)}>delete</button>
                </div>
               </div>
               </div> 

       </div>
   </section>
            
        </>
    );
};

export default Items;