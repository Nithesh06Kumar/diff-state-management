import { STATE_TYPE } from "@/src/constant/constant";
import { useCartProduct } from "@/src/stateglobal/zustand/product.store";
import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../../molecules/ProductCard/ProductCard";

interface CartScreenProp {
  type: STATE_TYPE;
}

const CartScreen: FC<CartScreenProp> = ({ type }) => {
  const { cart, removeItemFromCart } = useCartProduct();
  const handleRemoveCart = (id: number) => {
    removeItemFromCart(id);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <ProductCard item={item} removeFromCart={handleRemoveCart} isCart />
        )}
        keyExtractor={(item) => item.id?.toString()}
        ListEmptyComponent={<Text>No Data Found</Text>}
        numColumns={2}
        columnWrapperStyle={styles.coloumn}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 8,
  },
  flatlist: {
    alignContent: "space-between",
    gap: 8,
    paddingBottom: 50,
  },
  coloumn: {
    gap: 8,
  },
});
