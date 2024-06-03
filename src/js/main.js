import "../scss/main.scss";
import * as bootstrap from "bootstrap";
import "./modal.js";

import { init } from "../js/controller/catalogController.js";

document.addEventListener("DOMContentLoaded", function () {
  init();
});
