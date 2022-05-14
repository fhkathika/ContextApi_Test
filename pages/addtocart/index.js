import React from 'react';
import { createContext,useReducer } from "react"
import Cart from '../../components/Cart/Cart';
import ContextCart from '../../components/ContextCart/ContextCart';
import { reducer } from '../../components/Reducer/reducer';

import useServices from '../../hookTest/useServices';

export const CartContext = createContext();


const index = () => {
 
    const allItems=useServices();

const initialState={
    item: allItems,
    totalAmount:0,
    totalItem:0,
}
       const[state,dispatch]=useReducer(reducer,initialState)
    return (
        <>
         <CartContext.Provider value={allItems}>
         {/* <CartContext.Provider value={{...state}}> */}
     <ContextCart/>
            
        </CartContext.Provider>
        </>
       
    );
};

export default index;