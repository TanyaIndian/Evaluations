// On clicking remove button the item should be removed from DOM as well as localstorage.
let cartarr = JSON.parse(localStorage.getItem("coffee")) || []

// displaydish(cartarr)



  
    // console.log(d)
    cartarr.map(function(elem,i){
// console.log(elem.strMeal)
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src",elem.image)
    var name = document.createElement("h2")
    name.textContent= elem.title
    var price = document.createElement("h4")
    
    
    price.textContent = elem.price
    
    
    var btn = document.createElement("button")
    btn.setAttribute("id","remove_coffee")
    btn.textContent="remove"
    btn.addEventListener("click", function()
    {
      removebtn(i)
    })
    div.append(image,name,price,btn)
    document.querySelector("#bucket").append(div)
    })
  
  function removebtn(i)
  {
    cartarr.splice(i,1)
    localStorage.setItem("coffee",JSON.stringify(cartarr))
 window.location.reload()
  }
  let sum = 0
  for(let i=0; i<cartarr.length; i++){
      sum = sum + cartarr[i].price
  }
  document.querySelector("#total_amount").textContent = sum