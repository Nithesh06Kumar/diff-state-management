import { create } from "zustand";
import { fetchProductsApi } from "./product.api";

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

type TState = {
  cart: CartItem[];
  products: CartItem[];
};

type TActions = {
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  fetchProducts: () => void;
};

export const useCartProduct = create<TState & TActions>((set) => ({
  cart: [],
  products: [],
  fetchProducts: async () => {
    const data = await fetchProductsApi();
    set({ products: data || [] });
  },
  addItemToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((ele) => ele.id === item?.id);
      if (!existingItem) {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }

      return {
        cart: state.cart.map((ele) =>
          ele.id === item.id
            ? { ...ele, quantity: (ele.quantity || 0) + 1 }
            : ele
        ),
      };
    }),

  removeItemFromCart: (id: number) =>
    set((state) => {
      const newCart = state.cart?.filter((item) => item.id !== id);
      return { cart: newCart };
    }),
}));
