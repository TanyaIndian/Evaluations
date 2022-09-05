//store the products array in localstorage as "data"





let form = document.getElementById("product_form")
form.addEventListener("submit",addData)
let arr = JSON.parse(localStorage.getItem("data")) || []
function addData(event)
{
    event.preventDefault()
    console.log(form.product_price.value)
    let nme = form.product_name.value
    let price = form.product_price.value
    let brand = form.product_brand.value
    let image = form.product_image.value
let formData = new addformCF(nme,price,brand,image)

arr.push(formData)
localStorage.setItem("data",JSON.stringify(arr))
// console.log(arr)
 form.product_name.value = ""
form.product_price.value = ""
form.product_brand.value = ""
form.product_image.value = ""

}



function addformCF(nme,price,brand,image)
{
    this.name = nme;
    this.price = price
    this.brand=brand;
    this.image = image
}

