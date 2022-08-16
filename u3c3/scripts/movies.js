// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.querySelector("#wallet").innerText =
  localStorage.getItem("amount") || 0;
async function getMovies(query) {
  document.querySelector("#movies").innerHTML = "";
  const request = await fetch(
    `https://www.omdbapi.com/?apikey=60d7ab90&s=${query}`
  );
  const response = await request.json();
  let { Search } = response;
  Search.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("movie_tab");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let button = document.createElement("button");
    img.setAttribute("src", element.Poster);
    p.innerText = element.Title;
    button.innerText = "Book Now";
    button.classList.add("book_now");
    button.addEventListener("click", bookNow);
    div.append(img, p, button);
    document.querySelector("#movies").append(div);

    function bookNow() {
      localStorage.setItem("movie", JSON.stringify(element));
      window.location.href = "checkout.html";
    }
  });
}
let id;
function search() {
  let query = document.querySelector("#search").value;
  if (id) clearTimeout(id);
  id = setTimeout(getMovies, 1000, query);
}