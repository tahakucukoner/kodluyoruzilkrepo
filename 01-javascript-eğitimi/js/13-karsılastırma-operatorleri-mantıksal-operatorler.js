//******************* <Karsilastirma Operatörleri ******************
// https://www.w3schools.com/js/js_comparisons.asp

let price="100"
let user="taha"

// ==eşitse: 
console.log(price==1) //false
console.log(price==100) // true

//=== hem değeri hem de türü eşitse !!!!!önemliiiii
console.log(price===100) //false
console.log(price==="100") //true

// != eşit değilse:
console .log(price!=1) //true
console.log(user != "guest") ///true

// < küçükse veya <= küçük eşitse:
console.log(price<100) //false
console.log(price<=100) //true

// > büyükse veya >= büyük eşitse:
console.log(price>160) //false
console.log(price >=100) //true

// && ve , || veya :
 price=0 
 console.log(price>=0 && user!="guest") // true
 console.log(price>0 || user!="taha") // false

// ! tersi:
console.log( !(price>0 || user!="taha")) // true. Çünkü yukarıdaki son maddeyi tam olarak ters çevirip yazdık ve yukarıdaki
                                        // false olduğuna göre bunun da true olması gerekir.



 


 









