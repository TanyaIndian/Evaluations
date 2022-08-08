document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
let form = document.querySelector("form")
console.log(form.name.value)
if(form.name.value =="" || form.number.value =="" || form.address.value==""){
return false
}
else{
    setTimeout(function(){
        alert(`${form.name.value} order is confirmed`)
        setTimeout(function(){
            alert("Your order is being Packed")
            setTimeout(function(){
                alert("Your order is in transit")
                setTimeout(function(){
                    alert("Your order is out for delivery")
                    setTimeout(function(){
                        alert(`Order delivered to ${form.address.value}`)
                    },12000)
                },10000)
            },8000)
        },3000)
    },0)
}
})

