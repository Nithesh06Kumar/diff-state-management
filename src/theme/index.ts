export type ColorKeys =
  | "darkPink"
  | "lightPink"
  | "black"
  | "lightGrey"
  | "lightGreen"
  | "darkGreen";

export interface UITheme {
  colors: {
    [key in ColorKeys]: string;
  };
}

export const theme: UITheme = {
  colors: {
    darkPink: "#d142f5",
    lightPink: "#f9e0ff",
    black: "#000",
    lightGrey: "#d3d2d4",
    lightGreen: "#d8fad7",
    darkGreen: "#2f802d",
  },
};
