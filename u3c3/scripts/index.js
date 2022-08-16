// Store the wallet amount to your local storage with key "amount"
// Store the wallet amount to your local storage with key "amount"
document.querySelector("#add_to_wallet").addEventListener("click", addMoney);
document.querySelector("#wallet").innerText =
  localStorage.getItem("amount") || 0;
function addMoney() {
  let amount = document.querySelector("#amount").value;
  let old = localStorage.getItem("amount") ? localStorage.getItem("amount") : 0;
  let total = Number(amount) + Number(old);
  if (isNaN(total) || total <= 0) total = old;
  localStorage.setItem("amount", total);
  document.querySelector("#wallet").innerText = localStorage.getItem("amount");
  document.querySelector("#amount").value = "";
}

document.querySelector("#book_movies").addEventListener("click", () => {
  window.location.href = "movies.html";
});