
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const basketSlice = createSlice({

    name: 'basket',
    initialState,
    reducers:{
                addItem : (state, actions)=>{
                    state.items = [actions.payload, ...state.items]
                },

                removeItems : (state, actions) =>{
                    state.items = state.items.filter(item => item.id !== actions.payload)

                },

                increesItemQuantity: (state, action) => {
                    state.items = state.items.map(item =>{
                        if(item.id !== action.payload) return item;
                        return{
                            ...item,
                            quantity : item.quantity + 1
                        }
                    })        
            
                },   
                dicreesItemQuantity: (state, action) => {
                    state.items = state.items.map(item =>{
                        if(item.id !== action.payload) return item;
                        if(item.quantity === 1) return false
                        return{
                            ...item,
                            quantity : item.quantity - 1
                        }
                    }).filter(x => x !== false)        
            
                }   
        }

})

export const {addItem, removeItems, increesItemQuantity, dicreesItemQuantity} = basketSlice.actions;
export const sliceItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.map(x=> x.price * x.quantity).reduce((a,b) => a+b, 0);
export const selectTotalCart = (state) => state.basket.items.map(x=> x.quantity).reduce((a,b) => a+b, 0);

export default basketSlice.reducer;