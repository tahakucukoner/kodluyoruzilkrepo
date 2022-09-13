//************ Veri Türünü Öğrenmek Ve Veri Türü Donusumleri**************

//veri türünü öğrenmek typeof:
let price =111
let stringPrice="111"
let hasPassword=true

console.log(typeof(price))
console.log(typeof(stringPrice))
console.log(typeof(hasPassword))


// string(metinsel) bilgileri int ve float'a dönüştürmek
let number1= "11"
number1= parseInt(number1)
console.log(
    "number1:",number1,typeof(number1)
)
let number2= "11px"
number2= parseInt(number2)
console.log(
    "number2:",number2,typeof(number2)
)
let number3= "11"
number3= Number(number3)
console.log(
    "number3:",number3,typeof(number3)
)
//  "parse" metodu başında sayı olan ve sonrasında karakter olsa bile onu number ifadeye dönderirken;
// "Number" fonksiyonu, ifadede sadece number varsa onu number ifadeye dönüştürür.
//  NOT!!!!: burada aslında elde ettiğimiz şeyler str ifadedir. Aynı şekilde hepsi aslında number ifadeye dönüştürür, ama garanti olması için "parseInt" veya "parseFloat" kullanmak daha iyidir.

let number4= "11.4px11"
number4= parseFloat(number4)
console.log(
    "number4",number4,typeof(number4)
)

// veri tipinden str'ye dönüştürmek 
let number5=55
number5= number5.toString()
console.log(number5,typeof(number5))

















