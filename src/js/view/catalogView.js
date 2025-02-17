function renderProducts(products, addToCartCallback) {
  const productLists = document.querySelectorAll(".card__list");
  productLists.forEach((productList) => {
    productList.innerHTML = "";
    products.slice(0, 8).forEach((product) => {
      const productItem = document.createElement("li");
      productItem.classList.add("product");
      productItem.innerHTML = `
          <img
            src="${product.image}"
            alt="product image"
            class="product__image mb-3"
          />
          <p class="product__name mb-4">${product.name}</p>
          <div class="product__info--bottom d-flex justify-content-between align-items-center">
            <p class="product__category mb-0">${product.category}</p>
            <div class="product__prices align-content-center">
              <p class="product__price mb-0">$${product.salePrice}</p>
            </div>
          </div>`;

      productItem.addEventListener("click", () => {
        addToCartCallback(product);
      });

      productList.appendChild(productItem);
    });
  });
}

function setupFilterButtons(filterProductsCallback) {
  const buttonsArray = [
    { name: "All products", id: "all" },
    { name: "T-Shirt", id: "T-Shirt" },
    { name: "Hoodies", id: "Hoodies" },
    { name: "Jacket", id: "Jacket" },
  ];

  const buttonsContainers = document.querySelectorAll(".tabs__list");
  buttonsContainers.forEach((buttonsContainer) => {
    buttonsContainer.innerHTML = "";

    let activeButton = null;

    buttonsArray.forEach((button) => {
      const buttonItem = document.createElement("li");
      buttonItem.classList.add("list__items");
      buttonItem.textContent = button.name;
      buttonsContainer.appendChild(buttonItem);

      if (button.id === "all") {
        buttonItem.classList.add("list__items--active");
        activeButton = buttonItem;
      }

      buttonItem.addEventListener("click", () => {
        if (activeButton && activeButton !== buttonItem) {
          activeButton.classList.remove("list__items--active");
        }

        buttonItem.classList.add("list__items--active");
        activeButton = buttonItem;

        filterProductsCallback(button.id);
      });
    });
  });
}

function setupCart(openCartCallback, closeCartCallback, checkoutCallback) {
  const cartButton = document.querySelector(".nav__cart");
  const cartContainer = document.getElementById("cartContainer");
  const cartCloseButton = document.getElementById("cartCloseButton");
  const checkoutButton = document.querySelector(".cart-checkout");

  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    openCartCallback();
  });

  cartCloseButton.addEventListener("click", closeCartCallback);

  checkoutButton.addEventListener("click", checkoutCallback);
}

function renderCart(cart, removeFromCartCallback) {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItemHTML = `
        <li class="cart-item">
          <img src="${item.image}" alt="product image" class="cart-item__image">
          <div class="cart-item__details">
            <p class="cart-item__name">${item.name}</p>
            <p class="cart-item__price">$${item.salePrice.toFixed(2)}</p>
          </div>
          <button class="cart-item__remove-btn" data-index="${index}">Remove</button>
        </li>
      `;
    cartList.innerHTML += cartItemHTML;
  });

  const cartTotal = cart.reduce((acc, item) => acc + item.salePrice, 0);
  document.querySelector(
    ".cart-total"
  ).textContent = `Total: $${cartTotal.toFixed(2)}`;

  const removeButtons = document.querySelectorAll(".cart-item__remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.dataset.index);
      removeFromCartCallback(index);
    });
  });
}

export { renderProducts, setupFilterButtons, setupCart, renderCart };
