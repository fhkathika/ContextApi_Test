import Head from 'next/head'
import Image from 'next/image'
import {useContext } from "react";
import { createContext,useReducer,useEffect} from "react"

import React from 'react';

import useServices from '../../hookTest/useServices';
import ItemProduct from '../Card/ItemProduct';
import { CartContextForProduct } from '../../pages/allproduct/allproduct';

const ContextCardForProducts = () => {
    const [allItems,setItem]=useServices()
    const {item,clearCart,totalItem,totalAmount} = useContext(CartContextForProduct);
    return (

       
       <>
       <h1>All Product</h1>
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