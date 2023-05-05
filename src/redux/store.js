import { configureStore } from "@reduxjs/toolkit";
import yogaSlice from "./slice"

const store = configureStore({
    reducer: {
        yoga: yogaSlice
    }
})

export default store;