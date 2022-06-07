import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrder} from "../types";

type OrderState = {
    list: IOrder[],
}
const initialState: OrderState = {
    list: [{
        id: "1",
        company: "company",
        name: "name",
        additional: "additional",
        street: "street",
        postalCode: "23",
        country: "country",
        IBan: "IBan",
        BIC: "BIC",
        bankName: "bankName",
        fax: "fax",
        email: "email",
        birthday: "birthday",
    }],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<IOrder>) {
            state.list.push({
                id: action.payload.id,
                company: action.payload.company,
                name: action.payload.name,
                additional: action.payload.additional,
                street: action.payload.street,
                postalCode: action.payload.postalCode,
                country: action.payload.country,
                IBan: action.payload.IBan,
                BIC: action.payload.BIC,
                bankName: action.payload.bankName,
                fax: action.payload.fax,
                email: action.payload.email,
                birthday: action.payload.birthday,
            });
        },
        removeOrder(state, action: PayloadAction<string>) {
            state.list = state.list.filter(order => order.id !== action.payload);
        }
    },
});

export const {addOrder, removeOrder} = orderSlice.actions;

export default orderSlice.reducer;