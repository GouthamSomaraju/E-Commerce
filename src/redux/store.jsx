import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './createSlice'
import cartReducer from './cartSlice'

let store=configureStore({
    reducer:{
        posts:postsReducer,
        cart:cartReducer
        
    }
})

export default store