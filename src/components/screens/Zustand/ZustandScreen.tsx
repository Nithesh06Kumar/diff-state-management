import { useCartProduct } from "@/src/stateglobal/zustand/product.store";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import { ProductView } from "./styles";

const ZustandScreen = () => {
  const { products } = useCartProduct();
  return (
    <ProductView>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id?.toString()}
        ListEmptyComponent={<Text>No Data Found</Text>}
        numColumns={2}
        columnWrapperStyle={styles.coloumn}
        contentContainerStyle={styles.flatlist}
      />
    </ProductView>
  );
};

export default ZustandScreen;

const styles = StyleSheet.create({
  flatlist: {
    alignContent: "space-between",
    flex: 1,
    gap: 8,
  },
  coloumn: {
    gap: 8,
  },
});
