import axios from "axios";

export async function fetchProducts() {
  try {
    const { data } = await axios.get("http://localhost:3000/products?");
    return data;
  } catch (error) {
    console.error("Error fetching the products:", error);
    return [];
  }
}
