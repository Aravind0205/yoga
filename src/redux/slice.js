import { createSlice } from "@reduxjs/toolkit";
import { fetchYogaCategories} from "./services"

const initialState = {
    yogaCategories: [],
    status: "idle",
    error: null
}

const yogaSlice = createSlice({
    name: "photographers",
    initialState,
    reducers: {
        setSelectedYoga: (state, action) => {
            state.yogaCategorieId = action.payload;
        }
    },
    extraReducers: {
          [fetchYogaCategories.pending ]: (state) => {
            state.status = 'loading';
          },
          [fetchYogaCategories.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.yogaCategories = action.payload;
          },
          [fetchYogaCategories.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          },
      }
})

export const { setSelectedYoga } = yogaSlice.actions

export default yogaSlice.reducer