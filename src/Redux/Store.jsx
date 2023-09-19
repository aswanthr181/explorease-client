
import { persistReducer, persistStore } from "redux-persist"
import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'

import { Clientreducer } from "./ClientAuth"
import { Agencyreducer } from "./AgentAuth"
import { AdminReducer } from "./AdminAuth"

const UserConfiger = {
    key: 'user',
    storage
}

const AgencyConfiger = {
    key: 'agency',
    storage
}

const AdminConfiger = {
    key: 'admin',
    storage
}

const persistedClientReducer = persistReducer(UserConfiger, Clientreducer)
const persistedAgencyReducer = persistReducer(AgencyConfiger, Agencyreducer)
const persistedAdminReducer  = persistReducer(AdminConfiger, AdminReducer)


export const Store = configureStore({
    reducer: {
        Client: persistedClientReducer,
        Agency: persistedAgencyReducer,
        Admin : persistedAdminReducer
    }
})

export const persistor = persistStore(Store);