const addtoDb=id=>{
    const exsists=localStorage.getItem('shopping_cart');
    console.log(exsists)
    let shopping_cart={};
    if(!exsists){
    
        shopping_cart[id]=1;
     
    }
    else{
        shopping_cart=JSON.parse(exsists);
        if(shopping_cart[id]){
            const new_count=shopping_cart[id]+1;
            shopping_cart[id]=new_count
        }
        else{
            shopping_cart[id]=1;
        }
    }
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))

}

//  const getCart =()=>{
//      const cart=localStorage.getCart('cart');
//      let cartObj
//      if(cart){
//          cartObj=JSON.parse(cart)
         
//      }
//      else{
//          cartObj={}
//      }
//      return cartObj

//  }
//  const addtoDb=name=>{
//      const cart=getCart()
//      cart[name]=1;
//      console.log(cart)
//      const cartStringify=JSON.stringify(cart);
//      localStorage.setItem('cart',cartStringify)
//  }
const getDb=()=> localStorage.getItem('shopping_cart')
const removeFromDb=id=>{
const exsists=getDb();
if(!exsists){

}
else{
    const shopping_cart=JSON.parse(exsists)
    delete shopping_cart[id];
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))
}

}

const getStoredCart=()=>{
    const exists=getDb();
    return exists ? JSON.parse(exists): {};
}

// decrement from db
const decrementFromDb=id=>{
    const exsists=localStorage.getItem('shopping_cart');
    console.log(exsists)
    let shopping_cart={};
    if(!exsists){
    
  
     
    }
    else{
        shopping_cart=JSON.parse(exsists);
        if(shopping_cart[id]){
            const new_count=shopping_cart[id]-1;
            shopping_cart[id]=new_count
        }
       
    }
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))

}
export {addtoDb,removeFromDb,decrementFromDb,getStoredCart}