//*************** DOM içerisinden oge secimi ************

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let title=document.getElementById("title")
title.innerHTML="pınar başından bulanır canım oy"
console.log(title)

let link= document.querySelector("ul#list>li>a")
link.innerHTML += " degisti"
link.style.color= "red"
link.classList.add("btn")
console.log(link)

// querySelector yapısı en çok kullanıolan yapıdır.
