import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true


// add product to cart
export const addCart=createAsyncThunk('carts/addCart'{

   
    try {
        const res=await axios.post('http://localhost:8001/addcard/'+data.id,data)
        .then(response=>response.data)
     
        
    } catch (error) {
        console.log(error.message)
    }

})
// display the cart
export const getCart=createAsyncThunk('carts/getCart'{

try {
    const res=await axios.get("http://localhost:8001/displaycart")
    .then(response=>response.data)
    
} catch (error) {
    
}
})
// delete cart
export const deleteCart=createAsyncThunk('carts/deleteCart'{


try {
    const res=await axios.get("http://localhost:8001/deletefromcart/"+id)
   .then(response=>response.data)
   
 
    
} catch (error) {
    
}
})
export const CartSlice=createSlice(
    {
        name:"carts",
        initialState:{cart:[],isloading:false,error:null},
        reducers:{
       
            //add cart
            
          

  
        [addCart.fulfilled]:(state,action)=>{
            state.isloading=false
            state.error=null
            state.cart.push(action.payload.qantite)
            console.log(action.payload)
        },
       

        //display the cart
        
        
        [getCart.fulfilled]:(state,action)=>{
            state.isloading=false
           state.cart=action
           
           
        },
       
        //delete the cart
        
        [deleteCart.fulfilled]:(state,action)=>{
            state.isloading=false
            state.error=null
            state.cart.slice(1,action)
            console.log(action)
        },
       
    }
})
export default CartSlice.reducers