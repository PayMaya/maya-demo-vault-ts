import { configureStore } from "@reduxjs/toolkit"
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { cards, cart, currentUser } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistentReducer = persistCombineReducers(persistConfig, {
    cards,
    cart,
    currentUser
})

export const updateStore = () => 
    configureStore({
        reducer: persistentReducer,
        middleware: [thunk]
    })