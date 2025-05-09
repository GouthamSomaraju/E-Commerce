import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let fetchPosts=createAsyncThunk('posts/fetchPosts',async ()=>{
    let response= await fetch('https://products-api-9ac6.onrender.com/products')
    return response.json()
})

let initialState={
    data:[],
    loading:true,
    error:null

}
let postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload;
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    }
    
})

export default postsSlice.reducer;