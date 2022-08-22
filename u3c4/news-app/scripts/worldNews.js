// https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=
let data=JSON.parse(localStorage.getItem("user"))||[];
let news=document.getElementById("news_container");
async function getData(c){
    try {
        let res=await fetch("https://masai-mock-api-2.herokuapp.com/news/top-headlines?country="+c);
        let data=await res.json();
        // console.log(data);
        append(data)
    } catch (error) {
        console.log(error);
    }
}
getData(data.country);


function append(data)
{
    // console.log(data)
    news.innerHTML=null;
    data.articles.forEach((ele)=>{
        let div=document.createElement("div");
        div.setAttribute('class',"news");
        let img=document.createElement("img");
        img.setAttribute("src",ele.urlToImage);
        let title=document.createElement('p');
        title.innerText=ele.title;
        let author=document.createElement("p");
        author.innerText=ele.author;
        div.style.cursor="Pointer";
        div.addEventListener("click",function(){
            newsData(ele);
        })
        div.append(img,title,author);
        news.append(div);
    })
}

function newsData(ele)
{
    console.log(ele)
    localStorage.setItem("news",JSON.stringify(ele))
    window.location.href="news.html"
}


// searchData function()
async function searchData(){
    event.preventDefault();
   let search=document.getElementById('search').value;
    try {
        let res=await fetch("https://masai-mock-api-2.herokuapp.com/news?q="+search);
        let data=await res.json();
        console.log(data);
        append(data);
    } catch (error) {
        console.log("error")
    }
}