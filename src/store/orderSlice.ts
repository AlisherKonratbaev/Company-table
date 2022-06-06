import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Order = {
    id: string,
    title: string,
    completed: boolean,
}
type OrderState = {
    list: Order[],
}
const initialState:OrderState = {
    list: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action:PayloadAction<string>) {
            state.list.push({
                id: new Date().toString(),
                title: action.payload,
                completed: false,
            });
        },
        // toggleComplete(state, action: PayloadAction<string>) {
        //     const toggledTodo = state.list.find(todo => todo.id === action.payload);
        //     if(toggledTodo) toggledTodo.completed = !toggledTodo.completed;
        // },
        // removeTodo(state, action: PayloadAction<string>) {
        //     state.list = state.list.filter(todo => todo.id !== action.payload);
        // }
    },
});

export const {addOrder, } = orderSlice.actions;

export default orderSlice.reducer;