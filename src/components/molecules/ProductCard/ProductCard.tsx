import { CartItem } from "@/src/stateglobal/zustand/product.store";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CardView, ContentView, DescText, TitleText } from "./styles";

const ProductCard = ({ item }: { item: CartItem }) => {
  return (
    <CardView>
      <Image
        source={item?.image || ""}
        style={styles.image}
        contentFit={"contain"}
        transition={1000}
      />
      <ContentView>
        <TitleText numberOfLines={1}>{item.title}</TitleText>
        <DescText numberOfLines={1}>{item.description}</DescText>
        <View style={styles.pricing}></View>
      </ContentView>
    </CardView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
  pricing: {},
});
