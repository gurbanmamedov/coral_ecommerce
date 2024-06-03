const cartButton = document.querySelector(".nav__cart");
const cartContainer = document.getElementById("cartContainer");
const cartList = document.getElementById("cartList");
const cartCloseButton = document.getElementById("cartCloseButton");

let cart = [];

cartButton.addEventListener("click", (e) => {
  e.preventDefault();
  cartContainer.style.display = "block";
});


cartCloseButton.addEventListener("click", () => {
  cartContainer.style.display = "none";
});


function updateCart() {
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const cartItemHTML = `
      <li>
        <img src="${item.image}" alt="product image" width="50">
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>
      </li>
    `;
    cartList.innerHTML += cartItemHTML;
  });

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  document.querySelector(
    ".cart-total"
  ).textContent = `Total: $${cartTotal.toFixed(2)}`;
}

function handleProductClick(event) {
  const productItem = event.currentTarget;
  const productName = productItem.querySelector(".product__name").textContent;
  const productPrice = productItem
    .querySelector(".product__price")
    .textContent.replace("$", "");
  const productImage = productItem.querySelector(".product__image").src;

  const cartItem = {
    name: productName,
    price: parseFloat(productPrice),
    image: productImage,
  };

  cart.push(cartItem);
  updateCart();
}
