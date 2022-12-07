import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isLoading: false,
        record: [],
    },
    reducers : {
        getHomeFetch: (state)=>{
            state.isLoading= true;
        },
        getHomeSuccessRecord: (state, action)=>{
            state.isLoading= false;
            state.record= action.payload;
        },
        getHomeFailure: (state)=>{
            state.isLoading= false;
        }
    }
});

export const { getHomeFetch, getHomeSuccessRecord, getHomeFailure} = homeSlice.actions;
export default homeSlice.reducer;
