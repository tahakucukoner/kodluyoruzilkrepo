// ************* liste içerisindeki bir elemana ulaşmak vey alisteyeb yeni bir elaman eklemek *************

let item= document.querySelector("ul#list>li:last-child")
item.innerHTML="son oge degisti"
console.log(item)

let item2= document.querySelector("ul#list>li:first-child")
item2.innerHTML="ilk oge degisti"
console.log(item2)

let ulDOM= document.querySelector("ul#list")
let liDOM= document.createElement("li")          //burada web sayfasına bir liste daha ekledik.
liDOM.innerHTML= "Kendi Oluşturduğumuz Oge"  

ulDOM.append(liDOM)








