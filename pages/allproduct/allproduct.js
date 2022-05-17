import Head from 'next/head'
import Image from 'next/image'
import {useContext } from "react";
import { createContext,useReducer,useEffect} from "react"
import React from 'react';
import useServices from '../../hookTest/useServices';


import { reducer } from '../../components/Reducer/reducer';
import ContextCardForProducts from '../../components/ContextCart/ContextCardForProducts';
import { Products } from '../../components/Products/Products';
import { addtoDb } from '../../components/fakeDb/Fakedb';

export const CartContextForProduct = createContext();
const initialState = {
    item: Products,
    totalAmount:0,
    totalItem:0,
}
const allproduct = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    //increment item
const AddItem=(id)=>{
    return (dispatch({
        type:"INCREMENT",
        payload:id,
    }),

    // save to local storage
    addtoDb(id))
}
    return (

       
       <>
           <CartContextForProduct.Provider value={{...state,AddItem}}>
           <ContextCardForProducts></ContextCardForProducts>
    
        </CartContextForProduct.Provider>

       </>
        
    );
};

export default allproduct;