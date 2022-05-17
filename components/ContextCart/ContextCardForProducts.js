import Head from 'next/head'
import Image from 'next/image'
import {useContext } from "react";
import { createContext,useReducer,useEffect} from "react"
import router, { useRouter } from "next/router";
import React from 'react';

import useServices from '../../hookTest/useServices';
import ItemProduct from '../Card/ItemProduct';
import { CartContextForProduct } from '../../pages/allproduct/allproduct';

const ContextCardForProducts = () => {
    const [allItems,setItem]=useServices()
    const {item,clearCart,totalItem,totalAmount} = useContext(CartContextForProduct);
    const handle_go_to_cart=(e)=>{
        e.preventDefault();
        router.push('/addtocart/cart')
      }
    return (

       
       <>
       <div className='cart_btn_and_title_style'>
       <h1>All Product</h1>
       <button className='cart_btn' onClick={handle_go_to_cart}>Go To Cart</button>
       </div>
      
       <div className="card_div">
       {
         item.map(singleItems=> 
         <>
      
    <ItemProduct singleItems={singleItems}></ItemProduct>
      
        
         </>
       )
       }
       </div>
      
       </>
        
    );
};

export default ContextCardForProducts;