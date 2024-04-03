import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        selectedItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const { item } = action.payload;
            const existingItem = state.selectedItems.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.selectedItems.push({ ...item, count: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            state.selectedItems = state.selectedItems.filter(item => item.id !== action.payload);
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
