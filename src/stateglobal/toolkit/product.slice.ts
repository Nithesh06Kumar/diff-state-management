import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  quantity?: number;
};
export interface CounterState {
  cart: CartItem[];
}

const initialState: CounterState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(
        (ele) => ele.id === action.payload?.id
      );
      if (!existingItem) {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      state.cart = state.cart.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, quantity: (ele.quantity || 0) + 1 }
          : ele
      );
    },
    removeItemFromCartTool: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart?.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemToCart, removeItemFromCartTool } = productSlice.actions;
export default productSlice.reducer;
