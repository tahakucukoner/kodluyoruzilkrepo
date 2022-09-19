// *********coklu kosullarla calısmak*******

let userName=prompt("Kullanıcı adınız: ")
let age= prompt("yaşınız:? ")
let info= document.querySelector("#info")

if (userName && age >=18){
    info.innerHTML= "ehliyet alabilirsiniz"
}else if(!userName){
    info.innerHTML= "kullanıcı adınız yok"
}else if(!age >=18){
    info.innerHTML= "yas bilginiz yok veya 18 yasından kucuksunuz"
}


















