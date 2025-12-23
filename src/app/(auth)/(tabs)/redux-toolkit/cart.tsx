import CartScreen from "@/src/components/screens/CartScreen/CartScreen";
import { STATE_TYPE } from "@/src/constant/constant";
import React from "react";
import { StyleSheet } from "react-native";

const Cart = () => {
  return <CartScreen type={STATE_TYPE.TOOLKIT} />;
};

export default Cart;

const styles = StyleSheet.create({});
