import React from 'react';
import { useContext } from "react"
import router, { useRouter } from "next/router";
import { CartContext } from '../../pages/addtocart/cart';
import Items from '../Cart/Items';
const ContextCart = () => {

//  const [items,setItem]  = useContext(CartContext);
 const {item,clearCart,totalItem,totalAmount} = useContext(CartContext);
 const handle_back_to_product=(e)=>{
    e.preventDefault();
    router.push('/allproduct/allproduct')
  }
 if(item.length===0){
     return(
         <>
          <div className='cart_btn_and_title_style'>
       <h1>Add To Cart</h1>
       <button className='cart_btn' onClick={handle_back_to_product}>Go To Cart</button>
       </div>
            <section>
       <p>shopping cart</p>
       <p className="total_items">you have <span>{totalItem}</span>iuouitems </p>
       </section>
         </>
     )
 }
    return (
        <div>
              <div className='cart_btn_and_title_style'>
       <h1>Add To Cart</h1>
       <button className='cart_btn' onClick={handle_back_to_product}>Go To Cart</button>
       </div>
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