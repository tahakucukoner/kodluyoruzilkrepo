// *************** css bilgi almak ve çıkarmak ****************

let greeting= document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")


greeting.classList.remove("title")
greeting.classList.item(0)
greeting.classList.replace("new-info","title1")



console.log(greeting.classList)
 



 



















