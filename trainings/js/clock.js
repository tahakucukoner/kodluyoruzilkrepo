let userName= prompt("Kullanıcı adı giriniz: ")
let info= document.querySelector("#myName")
info.innerHTML= `${userName}`

function tarihSaat(){
    var date=  new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML= date;
}

setInterval(tarihSaat)











