// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
document.querySelector("#wallet").innerText =
  localStorage.getItem("amount") || 0;

function bookMovie() {
  let total_seats = +document.querySelector("#number_of_seats").value;
  let totalCost = total_seats * 100;
  let walletBalance = +localStorage.getItem("amount");
  if (totalCost <= 0 || isNaN(totalCost)) {
    alert("Enter Valid Seats");
    document.querySelector("#number_of_seats").value = "";
    document.querySelector("#user_name").value = "";
    return;
  }
  console.log(totalCost, walletBalance);
  if (walletBalance >= totalCost) {
    let newAmount = walletBalance - totalCost;
    localStorage.setItem("amount", newAmount);
    document.querySelector("#wallet").innerText =
      localStorage.getItem("amount") || 0;
    alert("Booking Successful!");
  } else {
    alert("Insufficient Balance!");
  }
  document.querySelector("#number_of_seats").value = "";
  document.querySelector("#user_name").value = "";
}

function appendMovie() {
  let element = JSON.parse(localStorage.getItem("movie"));
  let div = document.createElement("div");
  div.classList.add("movie_tab");
  let img = document.createElement("img");
  let p = document.createElement("p");
  img.setAttribute("src", element.Poster);
  p.innerText = element.Title;
  div.append(img, p);
  document.querySelector("#movie").append(div);
}
appendMovie();