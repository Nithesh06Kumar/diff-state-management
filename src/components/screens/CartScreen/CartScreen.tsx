import { STATE_TYPE } from "@/src/constant/constant";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CartScreenProp {
  type: STATE_TYPE;
}

const CartScreen: FC<CartScreenProp> = ({ type }) => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
