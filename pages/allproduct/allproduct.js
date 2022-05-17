import Head from 'next/head'
import Image from 'next/image'
import {useContext } from "react";

import React from 'react';
import useServices from '../../hookTest/useServices';
import { CartContext } from '../addtocart/cart';
import Product from '../../components/Card/Product';
import ContextCardForProducts from '../../components/ContextCart/ContextCardForProducts';

const allproduct = () => {
    return (

       
       <>
     <ContextCardForProducts></ContextCardForProducts>
       </>
        
    );
};

export default allproduct;