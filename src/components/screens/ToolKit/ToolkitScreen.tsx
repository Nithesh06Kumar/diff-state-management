import {
  CartItem,
  addItemToCart,
} from "@/src/stateglobal/toolkit/product.slice";
import { useCartProduct } from "@/src/stateglobal/zustand/product.store";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import { ProductView } from "../Zustand/styles";

const ToolkitScreen = () => {
  const { products } = useCartProduct(); //Just for products
  const dispatch = useDispatch();
  const handleAddToCart = (item: CartItem) => {
    dispatch(addItemToCart(item));
  };

  return (
    <ProductView>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard item={item} handleAddToCart={handleAddToCart} />
        )}
        keyExtractor={(item) => item.id?.toString()}
        ListEmptyComponent={<Text>No Data Found</Text>}
        numColumns={2}
        columnWrapperStyle={styles.coloumn}
        contentContainerStyle={styles.flatlist}
      />
    </ProductView>
  );
};

export default ToolkitScreen;

const styles = StyleSheet.create({
  flatlist: {
    alignContent: "space-between",
    gap: 8,
  },
  coloumn: {
    gap: 8,
  },
});
