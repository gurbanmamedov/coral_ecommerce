import "../scss/main.scss";
import * as bootstrap from "bootstrap";
import "./modal.js";

import { getProducts, showProducts, filterProducts } from "./catalog.js";

document.addEventListener("DOMContentLoaded", function () {
  getProducts();
});
