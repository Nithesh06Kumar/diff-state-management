import { UITheme } from "@/src/theme";
import styled from "@emotion/native";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 8;

export const CardView = styled.View(({ theme }: { theme?: UITheme }) => {
  return {
    backgroundColor: theme?.colors.lightGrey,
    width: CARD_WIDTH,
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: 8,
    gap: 8,
  };
});
export const ContentView = styled.View(({ theme }) => {
  return {
    alignItems: "flex-start",
    width: "100%",
    gap: 8,
  };
});

export const TitleText = styled.Text(({ theme }) => {
  return {
    fontSize: "16",
    fontWeight: "500",
  };
});
export const DescText = styled.Text(({ theme }) => {
  return {
    fontSize: "14",
  };
});
export const PriceText = styled.Text(({ theme }) => {
  return {
    fontSize: "14",
  };
});
