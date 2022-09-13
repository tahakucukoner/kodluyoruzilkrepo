// *********** Boolean Veri Turu ile Çalışmak *********


// 0 ve 1'i anlamak ->
let isActive = false //0 gibi düşünebiliriz
isActive=true // 1 gibi düşünebiliriz
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // True
Boolean("0") // True
Boolean("") // False

userName= "username"
console.log("username var mı?:",Boolean(userName))

// Burada denilmek istenen şey aslında Boolean içerisine bir değer gönderirsek 
// true değeri alırız çünkü true ile evet cevabı verişlmiş gibi olur.bu, str ve normal variable 
// değerleri için geçerlidir. Yalnız 0 ı koyarsak 0 ı alırız, çünkü Boolean bize 0 yazdığımızda öyle bir değer yokmuş gibi algılar



//!!!! UYARI: Boolean() ifadesi bir fonksiyondur. Yani aslında variable ları bize true mu yoksa false mu olduğunu gösterir.

var x = 10/"a";
console.log(Boolean(x))
