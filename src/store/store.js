import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices";

export const store = configureStore({
    reducer: {
       suscriptor: formSlice.reducer 
    }
})