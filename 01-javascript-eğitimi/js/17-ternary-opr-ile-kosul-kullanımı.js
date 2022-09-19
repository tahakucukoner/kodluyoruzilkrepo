// **************** ternary operatör ile kosul kullanımı**********

// eger kullanıcı adın varsa yazdır yoksa kullanıcı biilginiz bulunmadı yaz

let userName= prompt("kullanıcı adınızı giriniz:")
let info= document.querySelector("#info")

//ternany kullanımı
// kosul ? dogruysa: yanlıssa
//info.innerHTML= `${userName.length>0 ? userName: "kullanıcı bilginiz bulunamadı "}`
info.innerHTML= `${userName.length>0 ? "tebrikler,başardınız": "kullanıcı bilginiz yok "}`














