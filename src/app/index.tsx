import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useCartProduct } from "../stateglobal/zustand/product.store";

export default function Index() {
  const router = useRouter();
  const { fetchProducts, products } = useCartProduct();

  useEffect(() => {
    //just fetch product once for sample
    products?.length < 1 && fetchProducts();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the App</Text>
      <Button
        title="Sign In"
        onPress={() => {
          router.replace("/(auth)/(tabs)/zustand");
        }}
      />
    </View>
  );
}
