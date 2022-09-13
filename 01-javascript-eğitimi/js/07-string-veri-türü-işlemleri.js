//************ String  Veri Turu İslemleri ****************
//https://www.w3schools.com/jsref/jsref_obj_string.asp   // bu adres konu anlatımıyla ilgi,li bilgilerin olduğu yerdir.

let email="tahakoner@gmail.com"
let firstName= "taha"
let lastName= "küçüköner"

//str karakter sayısı-- length:
console.log(email.length)
console.log(firstName.length)
console.log(lastName.length)

//İlk karakteri bulmak için-- [0]
console.log(email.charAt(0))
console.log(email[0])
console.log(firstName[0])
console.log(lastName[0])

// Buyuk harf kucuk harf:
firstName=firstName.toLocaleUpperCase()
console.log(firstName)
firstName=firstName.toLowerCase()
console.log(firstName)

//string içerisinde istediğimiz bilgiyi aramak ve yerini bulmak-- search
result= firstName.search("h")
console.log(result)
// result= firstname.search("olmayan bir şey") // -1 değerini verir.

//belli bir yere kadar al-- slice
result= email.slice(0,10) //slice metodu, indexler yardımıyla yazılmalıdır.
console.log(result)

let DOMAIN= email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf(".")) //sadece gmail kısmını almak için kullanırız
)

//bilgiyi değiştir -- replace
result= email.replace("gmail.com","kodluyoruz.org")
console.log(result)

//istediğim bilgi başladı mı bitti mi -- startswith&endsWith
result= email.startsWith("tahakoner")
console.log(result)

// İlk harfleri buyuk yapmak
let fullName= `${firstName[0].toUpperCase()}${firstName.slice(1)}`
console.log(fullName)
















