 
 import { configureStore } from "@reduxjs/toolkit";
import  basketReducer  from "./Slice/busketSlice";
 export const store = configureStore({

    reducer : {
        basket : basketReducer,
    },

 })