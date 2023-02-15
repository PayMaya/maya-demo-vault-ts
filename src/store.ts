import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { cards } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistentReducer = combineReducers({
    cards: persistReducer<CardDetails[], any>(persistConfig, cards),
})

export const updateStore = () => 
    configureStore({
        reducer: persistentReducer,
        middleware: [thunk]
    })