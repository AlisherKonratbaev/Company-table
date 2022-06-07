import {configureStore} from "@reduxjs/toolkit";
import orderReducer from './orderSlice'
import modalReducer from './modalSlice'

const store = configureStore({
    reducer: {
        order: orderReducer,
        modal: modalReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;