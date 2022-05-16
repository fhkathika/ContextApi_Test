import React from 'react';
import { useContext } from "react"

import { CartContext } from '../../pages/addtocart/cart';
import Items from '../Cart/Items';
const ContextCart = () => {

//  const [items,setItem]  = useContext(CartContext);
 const {item,clearCart,totalItem,totalAmount} = useContext(CartContext);
 if(item.length===0){
     return(
         <>
            <h1>Add To Cart</h1>
            <section>
       <p>shopping cart</p>
       <p className="total_items">you have <span>0</span>items </p>
       </section>
         </>
     )
 }
    return (
        <div>
               <h1>Add To Cart</h1>
            <section>
       <p>shopping cart</p>
       <p className="total_items">you have <span>{totalItem}</span>items </p>
       {
           item?.map((info=>
            <>
       
              <Items info={info}/>
            </>
             
               
           )
          
          )
       }
    <div>
        <h3>cart total : <span>{totalAmount}</span></h3>
        <button onClick={clearCart}>clear cart</button>
    </div>
   </section>
            
        </div>
    );
};

export default ContextCart;