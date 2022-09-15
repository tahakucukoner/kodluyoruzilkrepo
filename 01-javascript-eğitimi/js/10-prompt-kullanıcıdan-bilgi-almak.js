//************* prompt ile kullanıcıdan bilgi almak ************
//https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName= prompt("lütfen adınızı soyadınızı giriniz: ")
let greeting= document.querySelector("#greeting")

greeting.innerHTML= `${greeting.innerHTML} <small style="color:blue">${fullName}</small>`






