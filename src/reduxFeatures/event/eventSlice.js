import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/events', 
    withCredentials: true, 
  });

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const addEvent = createAsyncThunk('event/addEv', async(eventData, thunkAPI) => {
    try {
        const response = await api.post('/', eventData);
        if(response){
            console.log('event redux complete');
        }
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}) 

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builer) => {
        builer
            .addCase(addEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addEvent.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(addEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const {reset} = eventSlice.actions
export default eventSlice.reducer