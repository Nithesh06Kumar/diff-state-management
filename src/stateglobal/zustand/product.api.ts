export const fetchProductsApi = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("DATA", data);
    return data;
  } catch (e) {
    console.error("ERROR", e);
  }
};
