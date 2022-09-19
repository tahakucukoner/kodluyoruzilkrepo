 // Kosullarla calısmak

//1-Prompt ile aldıgın bilgiye gore asagıdaki yapiyi kullanarak notun bilgisini #infoya yazdır
//AA 90-100
//BA 85-89
//BB 80-84
//CB 75-79
//CC 70-74
//DC 65-69
//DD 60-64
//FD 50-59
//FF 0-49

//2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadıgini kontrol et
//3- ff bilgisinde üzgün surat ikonu çıkart, digerlerinde ise gulucuk olsun
//4-ff class bilgisi text-danger, digerlerinin ise text-primary olsun 

// let note= prompt("Puanınızı giriniz: ")
// info=document.querySelector("#info")
// switch(note){
// case 90<note<100:
//     info.innerHTML="AA"
// case 85<note<89:
//     info.innerHTML="BA"
// case 80<note<84:
//     info.innerHTML="BB"
// case 75<note<79:
//     info.innerHTML="CB"
// case 70<note<74:
//     info.innerHTML="CC"
// case 65<note<69:
//     info.innerHTML="DC"
// case 60<note<64:
//     info.innerHTML="DD"
// case 50<note<59:
//     info.innerHTML="FD"
// case 0<note<49:
//     info.innerHTML="FF"
// }                                     BU KENDİ YAPTIĞIM YÖNTEM!BAKILMASI GEREK 


let note= prompt("Puanınızı giriniz: ")
let info= document.querySelector("#info")
let harfNotu;
const smile= `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const frown= `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

if(note>=0 && note<=100){
    if(90<=note<=100){
        harfNotu+="AA"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(85<=note<=89){
        harfNotu+="BA"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(80<=note<=84){
        harfNotu+="BB"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(75<=note<=79){
        harfNotu+="CB"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(70<=note<=74){
        harfNotu+="CC"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(65<=note<=69){
        harfNotu+="DC"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(60<=note<=64){
        harfNotu+="DD"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(50<=note<=59){
        harfNotu+="FD"
        harfNotu=smile
        info.classList.add("text-primary")
    } else if(0<=note<=49){
        harfNotu= `${frown} FF`
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
    }
}else{
    harfNotu="Bu bilgiler doğru değil"
}



info.innerHTML=`${harfNotu} -> ${note}`

































