import { fetchProducts } from "../model/catalogModel.js";
import { renderProducts, renderFilterButtons } from "../view/catalogView.js";

export async function init() {
  const allProducts = await fetchProducts();
  renderProducts(allProducts);

  const buttonsArray = [
    { name: "All products", id: "all" },
    { name: "T-Shirt", id: "T-Shirt" },
    { name: "Hoodies", id: "Hoodies" },
    { name: "Jacket", id: "Jacket" },
  ];

  renderFilterButtons(buttonsArray, (category) => {
    const filteredProducts =
      category === "all"
        ? allProducts
        : allProducts.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          );
    renderProducts(filteredProducts);
  });
}
