import { createSlice } from "@reduxjs/toolkit";

let initialState={
    products:[],
    totalPrice:0
}


let cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let newitem=action.payload
            let existing=state.products.find(prodiuct=>prodiuct.id===newitem.id)
            if(existing){
                existing=existing.quantity+newitem.quantity
            }else{
                state.products.push(newitem)
            }
            state.totalPrice+=newitem.price
        },
        removeItem:(state,action)=>{
            let id=action.payload
            let item=state.products.find(product=>product.id===id)
            if(item){
                state.totalPrice-=item.price*item.quantity
                state.products=state.products.filter(product=>product.id!==id)
            }

        },
        increaseQuantity:(state,action)=>{
            let item=state.products.find(product=>product.id===action.payload)
            if(item){
                item.quantity+=1
                state.totalPrice+=item.price
            }
        },
        decreaseQuantity:(state,action)=>{
            let item=state.products.find(product=>product.id===action.payload)
            if(item&&item.quantity>1){
                item.quantity-=1
                state.totalPrice-=item.price
            }
        },
        clearCart:(state)=>{
            state.products=[]
            state.totalPrice=0

        }
    }
})

export let {addToCart, removeItem, increaseQuantity, decreaseQuantity, clearCart}=cartSlice.actions
export default cartSlice.reducer