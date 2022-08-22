
// console.log(data);
function showSide({image,name,email,country}){
    return `
    <img src="${image}" alt="" id="image"/>
    <h1 id="name">${name}</h1>
    <h2 id="email">${email}</h2>
    <h3 id="country">${country}</h3>
    `
}

export default showSide;