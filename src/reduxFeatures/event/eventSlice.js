import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/events', 
    withCredentials: true, 
  });

const initialState = {
    data1: '',
    data2: '',
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

export const getEvents = createAsyncThunk('event/getEvs', async(req, res, thunkAPI) => {
    try {
        const response = await api.get('/eventsList');
        if(response){
            console.log('getEvents redux successful');
            // window.location.reload(true);
            return (response.data);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
        }
});

export const getEvent = createAsyncThunk('event/getEvent', async(id) => {
    try {
        const response = await api.get(`/getEvent/${id}`);
        if(response){
            console.log('getEvent redux successful', response.data);
            // window.location.reload(true);
            return (response.data);
        }
    } catch (error) {
        console.log(error);
    }
});

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        reset: (state) => {
            state.data1 = ''
            state.data2 = ''
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
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true               
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.data1 = action.payload
                state.isLoading = false
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getEvent.pending, (state) => {
                state.isLoading = true               
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.data2 = action.payload
                state.isLoading = false
            })
            .addCase(getEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const {reset} = eventSlice.actions
export default eventSlice.reducer