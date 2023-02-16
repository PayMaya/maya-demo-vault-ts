import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { cards, cart, currentUser } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const persistentReducer = combineReducers({
    cards: persistReducer<Cards, any>(persistConfig, cards),
    currentUser: persistReducer<User, any>(persistConfig, currentUser),
    cart: persistReducer<Cart, any>(persistConfig, cart),
})

// const test = { cards, cart, currentUser }
// const reducers = combineReducers<AppState>(test)
// const persistentReducer = persistReducer(reducers, persistConfig)

export const updateStore = () => 
    configureStore({
        reducer: persistentReducer,
        middleware: [thunk]
    })