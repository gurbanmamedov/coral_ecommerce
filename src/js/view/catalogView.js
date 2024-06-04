// export const CartView = {
//   renderCart(cart) {
//     const cartList = document.getElementById("cartList");
//     cartList.innerHTML = "";

//     cart.forEach((item, index) => {
//       const cartItemHTML = `
//         <li class="cart-item">
//           <img src="${item.image}" alt="product image" class="cart-item__image">
//           <div class="cart-item__details">
//             <p class="cart-item__name">${item.name}</p>
//             <p class="cart-item__price">$${item.salePrice.toFixed(2)}</p>
//           </div>
//           <button class="cart-item__remove-btn" data-index="${index}">Remove (Index: ${index})</button> <!-- Добавлен вывод индекса для отладки -->
//         </li>
//       `;
//       cartList.innerHTML += cartItemHTML;
//     });

//     const cartTotal = cart.reduce((acc, item) => acc + item.salePrice, 0);
//     document.querySelector(
//       ".cart-total"
//     ).textContent = `Total: $${cartTotal.toFixed(2)}`;

//     const removeButtons = document.querySelectorAll(".cart-item__remove-btn");
//     removeButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const index = parseInt(button.dataset.index);
//         console.log("Removing item at index:", index);
//         CartController.removeFromCart(index);
//       });
//     });
//   },
// };
