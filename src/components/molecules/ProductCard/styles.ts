import { UITheme } from "@/src/theme";
import styled from "@emotion/native";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 8;
const SMALL_CARD_WIDTH = width / 2 - 12;

export const CardView = styled.View(
  ({ theme, isSmall }: { theme?: UITheme; isSmall?: boolean }) => {
    return {
      backgroundColor: theme?.colors.lightGrey,
      width: isSmall ? SMALL_CARD_WIDTH : CARD_WIDTH,
      alignItems: "center",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 8,
      padding: 8,
      gap: 8,
    };
  }
);
export const ContentView = styled.View(({ theme }) => {
  return {
    alignItems: "flex-start",
    width: "100%",
    gap: 8,
  };
});

export const TitleText = styled.Text(() => {
  return {
    fontSize: 16,
    fontWeight: "500",
  };
});
export const DescText = styled.Text(() => {
  return {
    fontSize: 14,
  };
});
export const PriceText = styled.Text(() => {
  return {
    fontSize: 14,
  };
});
