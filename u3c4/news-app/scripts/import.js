function sideBar() {
    let data = JSON.parse(localStorage.getItem("user"));
    let imgElem = document.createElement("img");
    imgElem.setAttribute("src", data.image);
    imgElem.setAttribute("id", "image");
    let nameElem = document.createElement("p");
    nameElem.innerText = data.name;
    nameElem.setAttribute("id", "name");
    let emailElem = document.createElement("p");
    emailElem.innerText = data.email;
    emailElem.setAttribute("id", "email");
    let countryElem = document.createElement("p");
    countryElem.innerText = data.country;
    countryElem.setAttribute("id", "country");
  
    document
      .querySelector("#sidebar")
      .append(imgElem, nameElem, emailElem, countryElem);
  }
  
  export default sideBar;