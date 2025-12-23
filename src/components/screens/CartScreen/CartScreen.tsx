import { STATE_TYPE } from "@/src/constant/constant";
import { removeItemFromCartTool } from "@/src/stateglobal/toolkit/product.slice";
import { RootState } from "@/src/stateglobal/toolkit/store";
import { useCartProduct } from "@/src/stateglobal/zustand/product.store";
import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../molecules/ProductCard/ProductCard";

interface CartScreenProp {
  type: STATE_TYPE;
}

const CartScreen: FC<CartScreenProp> = ({ type }) => {
  const { cart: zusCart, removeItemFromCart } = useCartProduct();
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const getRemoveHandler = (id: number) => {
    switch (type) {
      case STATE_TYPE.ZUSTAND:
        removeItemFromCart(id);
        break;
      case STATE_TYPE.TOOLKIT:
        dispatch(removeItemFromCartTool({ id }));
        break;
      case STATE_TYPE.SAGA:
        break;
    }
  };

  const handleRemoveCart = (id: number) => {
    getRemoveHandler(id);
  };

  const getData = () => {
    switch (type) {
      case STATE_TYPE.ZUSTAND:
        return zusCart;
      case STATE_TYPE.TOOLKIT:
        return cart;
      case STATE_TYPE.SAGA:
        return cart;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getData()}
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
