import { createSlice } from "@reduxjs/toolkit";

export const ClientAuth=createSlice({
    name:"Client",
    initialState:{
        Token:null,
        UserData:null
    },

    reducers: {
        ClientLogin(state,action){
            state.Token=action.payload.token
        },
        ClientLogout(state,action){
            state.Token="";
        },
        GetUserData(state,action){
            state.UserData=action.payload.UserData;
        }
    }
})

export const {ClientLogin,ClientLogout,GetUserData}=ClientAuth.actions;
export const Clientreducer=ClientAuth.reducer