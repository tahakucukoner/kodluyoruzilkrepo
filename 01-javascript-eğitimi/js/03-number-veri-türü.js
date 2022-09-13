//************number************

//number veri türü tanimlamak:
let price= 100
let tax= 0.18
let priceTax= price*tax
let total= price + priceTax
console.log("Fiyat:", price, 
            "KDV Orani:",tax,
            "KDV Tutari:",priceTax,
            "Fiyat:",total
)

let stringNumber= "11"
console.log(stringNumber)
let newNumber= Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gönderildi", 111) 

//artırma ve azaltma işlemleri
let counter= 320
counter +=1
counter++
console.log(counter)

counter --;
console.log(counter)

counter *=10;
console.log(counter)

counter /=2;
console.log(counter)


//islem önceligi:
console.log(2+3 * 10)
console.log((2+3)* 10)

//mod(kalan) bulma %:
//sayı tek mi çift mmi 
console.log(15%2)

//üs alma:
console.log(2**4)

//asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.9))

//yukarı yuvarlama islemi -> Math.ceil:
console.log("Yukarı Yuvarlama: ", Math.ceil(9.9))

//yakina yuvarlama islemi -> Math.round:
console.log("Yakına Yuvarlama: ", Math.round(6.3))
































