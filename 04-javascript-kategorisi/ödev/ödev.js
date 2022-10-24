let Name =prompt("Kullanıcı adınızı giriniz :")
let First = document.getElementById("#myName")
First.innerHTML=Name ; 

TarihSaat = () => {
    date = new Date()
    const günler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let day = günler[date.getDay ()]
    let saat = date.getHours ()
    let dakika = date.getMinutes()
    let saniye = date.getSeconds()
    document.querySelector("#myClock").innerHTML= saat + ":" + dakika + ":" + saniye + day
} 
TarihSaat()
setInterval(TarihSaat,1000)



