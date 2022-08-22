let data=JSON.parse(localStorage.getItem("news"));
// console.log(data);

let show_news=document.getElementById("show_news");
function showNews(){
    let img=document.createElement("img");
    img.setAttribute("src",data.urlToImage)
    let h3=document.createElement("h3");
    h3.innerText=data.title;
    let h4=document.createElement("h4");
    h4.innerText=data.description;
    show_news.append(img,h3,h4);
}
showNews();