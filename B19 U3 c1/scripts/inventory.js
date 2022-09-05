let StoredData = JSON.parse(localStorage.getItem("data"))
let main = document.getElementById("products_data")
console.log(StoredData)
display(StoredData)

function display(StoredData)
{
   StoredData.map((ele,index)=>
   {
    // main.innerHTML = null
    let div = document.createElement("div")
    let img = document.createElement("img")
    let brand = document.createElement("p")
    brand.innerText = ele.brand
    let price = document.createElement("p")
    price.innerText = ele.price;
    let name = document.createElement("h2")
    img.src = ele.image
    let button = document.createElement('button')
    button.innerText = "remove"
    button.addEventListener('click',function()
    {
       remDiv(index)
    })
   div.append(img,name,brand,price,button)
   main.append(div)
   

   })
}

function remDiv(index)
{
    StoredData.splice(index,1)
    
    localStorage.setItem("data",JSON.stringify(StoredData))
    display(StoredData)
    window.location.reload()

}
