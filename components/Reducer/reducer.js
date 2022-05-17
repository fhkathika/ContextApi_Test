import React from 'react';
import { addtoDb, getStoredCart, removeFromDb } from '../fakeDb/Fakedb';

export const reducer = (state,action) => {
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElem)=>{
                return curElem.id != action.payload;
            })
        }
    }
    if(action.type === "CLEAR_CART"){
        return { ...state,item:[] };
    }
    if(action.type === "INCREMENT"){
        let updatedCart = state.item.map((curElem)=>{
   
            if(curElem.id=== action.payload){
                return {...curElem, quantity : curElem.quantity +1 };
            }
            console.log(curElem)
        
           return curElem;
        });
       
        return {...state,item: updatedCart};
    }
    if(action.type== "DECREMENT"){
        let updateCart=state.item.map((curElem)=>{
            if(curElem.id===action.payload){
                return {...curElem,quantity: curElem.quantity - 1}
            }
            return curElem;
        }).filter((curElem)=>{
            return curElem.quantity!==0;
        });

        return{...state,item:updateCart}

    }
    if(action.type==="GET_TOTAL"){
        let { totalItem,totalAmount }=state.item.reduce(
            (accum,curVal)=>{
                let {quantity,price}=curVal;
                let updatedTotalAmount =price * quantity
                accum.totalAmount += updatedTotalAmount
                accum.totalItem += quantity;
                return accum;
        },{
            totalItem:0,
            totalAmount:0,
        });
        return {...state,totalItem,totalAmount};
    }
    if(action.type==="GET_CART"){
        if(state?.item.length){
            const savedCart=getStoredCart();
            const storedCart=[];
            for(const id in savedCart){
              
          console.log(id,savedCart[id])
                const addedProduct=state?.item.find(item=>item.id=== parseInt(id))
              
                if(addedProduct){
                    const quantity=savedCart[id];
                    addedProduct.quantity=quantity
                   
                }
                if(addedProduct.quantity==0){
                    removeFromDb(id)
                }
                storedCart.push(addedProduct)
              
            }
     return {...state,item:storedCart}
         }
  
    }
    return state ;
};

