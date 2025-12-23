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
  addItemToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeItemFromCart: (id: number) =>
    set((state) => {
      const newCart = state.cart?.filter((item) => item.id !== id);
      return { cart: newCart };
    }),
}));
