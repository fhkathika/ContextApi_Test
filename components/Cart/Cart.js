import React from "react";
import { useEffect, useState } from "react";

const Cart = ({info}) => {
    const {name,price,img}=info
   
    return (
        <>
   <section>
       <p>shopping cart</p>
       <div className="cart-items">
           <div className="cart-items-container">
               <div className="items-info">
                <div className="product-img">
<img className="width_200 height_200" src={img}/>
                </div>
                <div className="title">
                    <h2>{name}</h2>

                </div>
                <div className="add-minus-quantity">
                    
                    <p>-</p>
                    <input className=" input" type="text" placeholder="2"/>
                 
                    <p>+</p>

                </div>
                <div className="price">
                    <h3>{price}tk</h3>
                </div>
                <div className="price">
                  <button>delete</button>
                </div>
               </div>
               </div> 

       </div>
   </section>
            
        </>
    );
};

export default Cart;