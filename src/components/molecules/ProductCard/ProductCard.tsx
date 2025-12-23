import { CartItem } from "@/src/stateglobal/zustand/product.store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import React, { FC } from "react";
import { Button, StyleSheet, View } from "react-native";
import {
  CardView,
  ContentView,
  DescText,
  PriceText,
  TitleText,
} from "./styles";
interface ProductCardProps {
  item: CartItem;
  handleAddToCart?: (item: CartItem) => void;
  removeFromCart?: (id: number) => void;
  isCart?: boolean;
}
const ProductCard: FC<ProductCardProps> = ({
  item,
  handleAddToCart,
  isCart = false,
  removeFromCart,
}) => {
  return (
    <CardView isSmall={isCart}>
      <Image
        source={item?.image || ""}
        style={styles.image}
        contentFit={"contain"}
        transition={1000}
      />
      <ContentView>
        <TitleText numberOfLines={1}>{item.title}</TitleText>
        <DescText numberOfLines={1}>{item.description}</DescText>
        <PriceText>₹{item.price}</PriceText>
        <View style={styles.rating}>
          {Array.from({ length: Math.ceil(item.rating.rate) }).map(
            (_, index) => (
              <AntDesign name="star" size={16} color="black" key={index} />
            )
          )}
          <PriceText>{"(" + item.rating.count + ")"}</PriceText>
        </View>
        {isCart && (
          <View style={styles.row}>
            <PriceText>
              {"Quantity:"}
              {item.quantity || 1}
            </PriceText>
            <PriceText>
              {"Total:₹"}
              {(item.quantity || 1) * item.price}
            </PriceText>
          </View>
        )}
      </ContentView>
      {isCart ? (
        <Button title="Remove" onPress={() => removeFromCart?.(item?.id)} />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart?.(item)} />
      )}
    </CardView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
  rating: {
    flexDirection: "row",
    gap: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
