// Add the coffee to local storage with key "coffee"
let cartarr = JSON.parse(localStorage.getItem("coffee")) || []
document.querySelector("#coffee_count").textContent = cartarr.length
var url ="https://masai-api.herokuapp.com/coffee/menu"
  async function getitem()
  {
    try{
      var res = await fetch(url)
      var data = await res.json()
    //   console.log(data.menu.data)
      displaydish(data.menu.data)
    }
    catch(err)
    {
      console.log(err)
    }
  }
  getitem()
  function displaydish(d)
  {
    console.log(d)
    document.querySelector("#menu").innerHTML = null
    d.map(function(elem){
// console.log(elem.strMeal)
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src",elem.image)
    var name = document.createElement("h2")
    name.textContent= elem.title
    var price = document.createElement("h4")
    
    
    price.textContent = elem.price
    
    
    var btn = document.createElement("button")
    btn.setAttribute("id","add_to_bucket")
    btn.textContent="add_to_bucket"
    btn.addEventListener("click", function()
    {
      cart(elem)
    })
    div.append(image,name,price,btn)
    document.querySelector("#menu").append(div)
    })
  }

//   var cartarr= []
 
  function cart(elem)
  {
     cartarr.push(elem)
     console.log(elem)
    //  console.log(cartarr.length)
     localStorage.setItem("coffee",JSON.stringify(cartarr))
    
     window.location.reload()
  }
  