import { createSlice } from "@reduxjs/toolkit";

export const AgencyAuth=createSlice({
    name: 'Agency',
    initialState:{
        Token:null,
        AgencyData:null
    },

    reducers:{
        AgencyLogin(state,action){
            state.Token=action.payload.token
        },
        AgencyLogout(state,action){
            state.Token="";
            state.AgencyData=null
        },
        GetAgencyData(state,action){
            state.AgencyData=action.payload.UserData;
        }
    }
})

export const {AgencyLogin,AgencyLogout}=AgencyAuth.actions;
export const Agencyreducer = AgencyAuth.reducer