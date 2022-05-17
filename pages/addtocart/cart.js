import React from 'react';
import { createContext,useReducer,useEffect} from "react"

import Cart from '../../components/Cart/Items';
import ContextCart from '../../components/ContextCart/ContextCart';
import { addtoDb, decrementFromDb, getStoredCart, removeFromDb } from '../../components/fakeDb/Fakedb';
import { Products } from '../../components/Products/Products';
import { reducer } from '../../components/Reducer/reducer';

import useServices from '../../hookTest/useServices';

export const CartContext = createContext();
const initialState = {
    item: Products,
    totalAmount:0,
    totalItem:0,
}
const cart = () => {
 
 
    // const allItems=useServices();
 
       const[state,dispatch]=useReducer(reducer,initialState)
       useEffect(()=>{
        dispatch({ type:"GET_TOTAL" });
    },[state.item]);


    //    delete individual element
const removeItem=(id)=>{
    return (dispatch({
        type:"REMOVE_ITEM",
        payload:id,
        }),removeFromDb(id))
        
}
//clear all cart
const clearCart=()=>{
    return dispatch({
        type:"CLEAR_CART",
    })
}
//increment item
const increment=(id)=>{
    return (dispatch({
        type:"INCREMENT",
        payload:id,
    }),

    // save to local storage
    addtoDb(id))
}
//decrement item
const decrement=(id)=>{
    return (dispatch({
        type:"DECREMENT",
        payload:id,
    }),decrementFromDb(id))
}
useEffect(()=>{
    dispatch({ type:"GET_CART" });

  
},[])

    return (
        <>
         {/* <CartContext.Provider value={useServices}> */}
         <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
     <ContextCart/>
    
        </CartContext.Provider>
        </>
       
    );
};

export default cart;