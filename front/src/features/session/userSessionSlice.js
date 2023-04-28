import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'

export const userSessionSlice=createSlice(

{
name:"userSession",
initialState:{value:JSON.parse(localStorage.getItem("userSession"))||{userName:null,idClient:null,connect:false,role:null}},
reducers :{
  login:(state,action)=>{
    state.value.userName = action.payload.userName;
    state.value.idClient = action.payload.idClient;
    state.value.role=action.payload.role
 state.value.connect=true;
 localStorage.setItem("userSession",JSON.stringify(state.value
 ))
  },
  logout: (state) => {
    state.value.userName = null;
    state.value.idClient = null;
    state.value.role=null
    state.value.connect=false;
    localStorage.setItem("userSession",JSON.stringify(state.value
      ))
  },
}


},


) 

export const {login, logout}=userSessionSlice.actions

export default userSessionSlice.reducer;