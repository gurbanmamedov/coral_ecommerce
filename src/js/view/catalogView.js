export function renderProducts(products) {
  const productLists = document.querySelectorAll(".card__list");
  productLists.forEach((productList) => {
    productList.innerHTML = "";
    products?.slice(0, 8).forEach((product) => {
      const productItem = document.createElement("li");
      productItem.classList.add("product");
      productItem.innerHTML = `
          <img
            src="${product?.image}"
            alt="product image"
            class="product__image mb-3"
          />
          <p class="product__name mb-4">${product?.name}</p>
          <div class="product__info--bottom d-flex justify-content-between align-items-center">
            <p class="product__category mb-0">${product?.category}</p>
            <div class="product__prices align-content-center">
              <p class="product__price mb-0">$${product?.salePrice}</p>
            </div>
          </div>`;
      productList.appendChild(productItem);
    });
  });
}

export function renderFilterButtons(buttonsArray, filterHandler) {
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

        filterHandler(button.id);
      });
    });
  });
}
