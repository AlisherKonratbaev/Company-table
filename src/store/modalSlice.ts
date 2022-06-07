import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModalStatus} from "../types";

const initialState: ModalStatus = {
    openBankData: false,
    openContact: false,
    openInvoice: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpenBankData(state, action: PayloadAction<boolean>) {
            state.openBankData = action.payload
        },
        setOpenContact(state, action: PayloadAction<boolean>) {
            state.openContact = action.payload
        },
        setOpenInvoice(state, action: PayloadAction<boolean>) {
            state.openInvoice = action.payload
        },
    },
});

export const {setOpenBankData, setOpenContact, setOpenInvoice} = modalSlice.actions;

export default modalSlice.reducer;