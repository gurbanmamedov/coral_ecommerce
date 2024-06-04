import {
  fetchProducts,
  addToCart,
  removeFromCart,
  clearCart,
  getCart,
} from "../model/catalogModel.js";
import {
  renderProducts,
  setupFilterButtons,
  setupCart,
  renderCart,
} from "../view/catalogView.js";

let allProducts = [];

async function init() {
  allProducts = await fetchProducts();
  renderProducts(allProducts, handleAddToCart);
  setupFilterButtons(handleFilterProducts);
  setupCart(openCart, closeCart, handleCheckout);
  renderCart(getCart(), handleRemoveFromCart);
}

function handleAddToCart(product) {
  addToCart(product);
  renderCart(getCart(), handleRemoveFromCart);
}

function handleRemoveFromCart(index) {
  removeFromCart(index);
  renderCart(getCart(), handleRemoveFromCart);
}

function handleCheckout() {
  clearCart();
  renderCart(getCart(), handleRemoveFromCart);
}

function handleFilterProducts(category) {
  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
  renderProducts(filteredProducts, handleAddToCart);
}

function openCart() {
  document.getElementById("cartContainer").style.display = "block";
}

function closeCart() {
  document.getElementById("cartContainer").style.display = "none";
}

export { init };
