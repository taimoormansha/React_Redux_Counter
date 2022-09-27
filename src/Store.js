import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
    reducer:{
        countValue:customReducer,
    }
});

export default store;