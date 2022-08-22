/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let submit=document.getElementById("submit");
submit.addEventListener("click",submitData);

// submitData function
function submitData(){
    let image=document.getElementById("image").value;
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let country=document.getElementById("country").value;
    let obj={
        image,name,email,country
    }
    localStorage.setItem("user",JSON.stringify(obj));
    // window.location.href="worldNews.html"
}