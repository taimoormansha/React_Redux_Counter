import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    count:0,
}

 export const customReducer = createReducer(
    initialState ,{
        increment: (state , action)=>{
            state.count += 1;
        },

        decrement: (state , action)=>{
            state.count -= 1;
        },

        reset: (state , action)=>{
            state.count = 0; 
        },

        incrementByValue: (state , action)=>{
            state.count += action.payload;
        },

        decrementByValue: (state , action)=>{
            state.count -= action.payload;
        }
    } 
);


