import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number;
    name: string;
}

interface CartState {
    items: Product[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    } as CartState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload);
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

