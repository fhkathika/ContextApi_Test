import Head from 'next/head'
import Image from 'next/image'
import {useContext } from "react";

import React from 'react';

import Product from '../../components/Card/Product';
import useServices from '../../hookTest/useServices';

const ContextCardForProducts = () => {
    const [allItems,setItem]=useServices()

    return (

       
       <>
       <h1>All Product</h1>
       <div className="card_div">
       {
         allItems.map(singleItems=> 
         <>
      
    <Product singleItems={singleItems}></Product>
      
        
         </>
       )
       }
       </div>
      
       </>
        
    );
};

export default ContextCardForProducts;