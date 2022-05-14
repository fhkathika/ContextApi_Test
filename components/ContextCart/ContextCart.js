import React from 'react';
import { useContext } from "react"
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../pages/addtocart';
const ContextCart = () => {

 const [items,setItem]  = useContext(CartContext);
//  const {items}  = useContext(CartContext);
    return (
        <div>
               <h1>Add To Cart</h1>
            <section>
       <p>shopping cart</p>
       <p className="total_items">you have <span>7</span>items </p>
       {
           items?.map((info=>
            <>
              <Cart info={info}/>
            </>
             
               
           )
          
          )
       }
    <div>
        <h3>cart total : <span>2200tk</span></h3>
        <button>checkout</button>
    </div>
   </section>
            
        </div>
    );
};

export default ContextCart;