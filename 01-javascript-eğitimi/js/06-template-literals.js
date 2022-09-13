//**************** Template Literals Kullanimi ****************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Referance/Template_Literals

let username="taha"
const DOMAIN= "kodluyoruz.org"

let email= username+ "@" + DOMAIN
//console.log("Merhaba",username,"sitemize hoşgeldin","mail adresin:",email)

let info= `Merhaba ${username} sitemize hoşgeldin.. mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz:${(2+3)*10}TL
günün saat bilgisi:${new Date().getHours()}
kısa isminiz: ${username[0]}.`
console.log(info)


// backtick yapmak için option, tuşlarına aynı anda basmak 
// aslında backtick kullanmamızın sebebi "" veya '' ifadeleri birden çok satır yazarken bize zorluk çıkarıyordu. 
// Bu şekilde istediğimiz satırda metin yazabilir ve print edebiliriz.