// import { fetchProducts } from "../api.js";
// import { CartModel } from "../model/catalogModel.js";
// import { CartView } from "../view/catalogView.js";

// export const CartController = {
//   async init() {
//     this.allProducts = await fetchProducts();
//     this.renderProducts(this.allProducts);
//     this.setupFilterButtons();
//     this.setupCart();
//   },

//   renderProducts(products) {
//     const productLists = document.querySelectorAll(".card__list");
//     productLists.forEach((productList) => {
//       productList.innerHTML = "";
//       products.slice(0, 8).forEach((product) => {
//         const productItem = document.createElement("li");
//         productItem.classList.add("product");
//         productItem.innerHTML = `
//           <img
//             src="${product.image}"
//             alt="product image"
//             class="product__image mb-3"
//           />
//           <p class="product__name mb-4">${product.name}</p>
//           <div class="product__info--bottom d-flex justify-content-between align-items-center">
//             <p class="product__category mb-0">${product.category}</p>
//             <div class="product__prices align-content-center">
//               <p class="product__price mb-0">$${product.salePrice}</p>
//             </div>
//           </div>`;

//         productItem.addEventListener("click", () => {
//           this.addToCart(product);
//         });

//         productList.appendChild(productItem);
//       });
//     });
//   },

//   setupFilterButtons() {
//     const buttonsArray = [
//       { name: "All products", id: "all" },
//       { name: "T-Shirt", id: "T-Shirt" },
//       { name: "Hoodies", id: "Hoodies" },
//       { name: "Jacket", id: "Jacket" },
//     ];

//     const buttonsContainers = document.querySelectorAll(".tabs__list");
//     buttonsContainers.forEach((buttonsContainer) => {
//       buttonsContainer.innerHTML = "";

//       let activeButton = null;

//       buttonsArray.forEach((button) => {
//         const buttonItem = document.createElement("li");
//         buttonItem.classList.add("list__items");
//         buttonItem.textContent = button.name;
//         buttonsContainer.appendChild(buttonItem);

//         if (button.id === "all") {
//           buttonItem.classList.add("list__items--active");
//           activeButton = buttonItem;
//         }

//         buttonItem.addEventListener("click", () => {
//           if (activeButton && activeButton !== buttonItem) {
//             activeButton.classList.remove("list__items--active");
//           }

//           buttonItem.classList.add("list__items--active");
//           activeButton = buttonItem;

//           this.filterProducts(button.id);
//         });
//       });
//     });
//   },

//   setupCart() {
//     const cartButton = document.querySelector(".nav__cart");
//     const cartContainer = document.getElementById("cartContainer");
//     const cartCloseButton = document.getElementById("cartCloseButton");
//     const checkoutButton = document.querySelector(".cart-checkout");

//     cartButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       cartContainer.style.display = "block";
//     });

//     cartCloseButton.addEventListener("click", () => {
//       cartContainer.style.display = "none";
//     });

//     checkoutButton.addEventListener("click", () => {
//       this.clearCart();
//     });

//     this.renderCart([]);
//   },

//   renderCart(cart) {
//     CartView.renderCart(cart);
//   },

//   addToCart(item) {
//     CartModel.addToCart(item);
//     this.renderCart(CartModel.cart);
//   },

//   removeFromCart(index) {
//     CartModel.removeFromCart(index);
//     this.renderCart(CartModel.cart);
//   },

//   clearCart() {
//     CartModel.clearCart();
//     this.renderCart(CartModel.cart);
//   },

//   filterProducts(category) {
//     const filteredProducts =
//       category === "all"
//         ? this.allProducts
//         : this.allProducts.filter(
//             (product) =>
//               product.category.toLowerCase() === category.toLowerCase()
//           );
//     this.renderProducts(filteredProducts);
//   },
// };

