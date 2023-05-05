import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchYogaCategories = createAsyncThunk(
    'yogaList/fetchYogaCategories',
    async () => {
        try {
            const res = await axios.get(`https://yoga-api-nzy4.onrender.com/v1/categories`);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)
