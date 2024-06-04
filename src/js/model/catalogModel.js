import axios from "axios";

const cart = [];

async function fetchProducts() {
  try {
    const { data } = await axios.get("http://localhost:3000/products?");
    return data;
  } catch (error) {
    console.error("Error fetching the products:", error);
    return [];
  }
}

function addToCart(item) {
  cart.push(item);
}

function removeFromCart(index) {
  cart.splice(index, 1);
}

function clearCart() {
  cart.length = 0;
}

function getCart() {
  return cart;
}

export { fetchProducts, addToCart, removeFromCart, clearCart, getCart };
