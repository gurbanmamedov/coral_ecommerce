const username = document.querySelector(".account__username");
const login = document.querySelector(".account__login");
const password = document.querySelector(".account__password");

const button = document.getElementById("registerButton");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("newModal");

let users = JSON.parse(localStorage.getItem("users")) || {};

function User(name, login, password) {
  this.name = name;
  this.login = login;
  this.password = password;
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const nameUser = username.value;
  const loginUser = login.value;
  const passwordUser = password.value;

  
  if (!nameUser || !loginUser || !passwordUser) {
    alert("Please fill in all fields.");
    return;
  }

  const userId = "user" + Date.now();
  const user = new User(nameUser, loginUser, passwordUser);
  users[userId] = user;

  localStorage.setItem("users", JSON.stringify(users));

  alert(`Successful registration, ${nameUser}`);
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

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});