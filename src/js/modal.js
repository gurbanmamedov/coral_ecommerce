const username = document.querySelector(".account__username");
const login = document.querySelector(".account__login");
const password = document.querySelector(".account__password");

const button = document.getElementById("registerButton");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("newModal");
const successModal = document.getElementById("successModal");
const closeSuccessModalButton = document.getElementById("closeSuccessModalButton");

let users = JSON.parse(localStorage.getItem("users")) || {};

function User(name, login, password) {
  this.name = name;
  this.login = login;
  this.password = password;
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const nameUser = username.value.trim();
  const loginUser = login.value.trim();
  const passwordUser = password.value.trim();

  if (!nameUser) {
    alert("Full name is required.");
    return;
  }
  if (!loginUser) {
    alert("Login is required.");
    return;
  }
  if (!passwordUser) {
    alert("Password is required.");
    return;
  }

  const userId = "user" + Date.now();
  const user = new User(nameUser, loginUser, passwordUser);
  users[userId] = user;

  localStorage.setItem("users", JSON.stringify(users));

  modal.style.display = "none";
  successModal.style.display = "flex";
  document.body.classList.add("modal-open");
});

openModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

closeSuccessModalButton.addEventListener("click", () => {
  successModal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  } else if (event.target == successModal) {
    successModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
