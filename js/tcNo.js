function Control(){
    var tcno = document.getElementById("tcno").value
    var sayilar=tcno.split('')
    var sayiDizi=[...sayilar]

    var hileliTC = [11111111110, 22222222220, 33333333330, 44444444440, 55555555550, 66666666660, 7777777770, 88888888880, 99999999990];

//ilk 10 değerin toplamının 10 a bölümünden kalan 11. haneyi verir.
    var ilkOnToplam=0;
    for(let i = 0; i<10; i++){
        ilkOnToplam = ilkOnToplam + Number(sayiDizi[i])
    }
    var onBirKontrol = ilkOnToplam % 10
//1 3 5 7 9 indisli rakamların toplamı 
    var tekToplam=0
    for(let i = 0; i<9; i++){
        tekToplam += Number(sayiDizi[i])
        i++
    }
// 2 4 6 8 indisli rakamların toplamı
    var ciftToplam=0
    for(let i= 1; i<8; i++){
        ciftToplam += Number(sayiDizi[i])
        i++
    }

// tektoplam * 7 - cifttoplam 10 a bölümünden kalan 10. elemana eşittir.
    var onKontrol = ((tekToplam * 7) - ciftToplam) % 10 
    // 0 ile başlayamaz

    var durum = hileliTC.indexOf(Number(tcno))
    console.log(durum)
    var noktaDurum = sayiDizi.indexOf(".")

    if(sayiDizi[0] == 0){
        document.getElementById("sonuc").innerHTML="Başlangıç değeri 0 olamaz"
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else if(durum != -1){
        document.getElementById("sonuc").innerHTML="Kardeş Yemezler"
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else if(noktaDurum != -1){
        document.getElementById("sonuc").innerHTML="Kardeş Yemezler (nokta)"
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else if(Number(tcno) == 10000000146){
        document.getElementById("sonuc").innerHTML="MUSTAFA KEMAL ATATÜRK'ÜN T.C. KİMLİK NUMARASINI GİRİŞ YAPTINIZ."
        document.querySelector("#arkaplan").classList.add('ataturk')
        document.querySelector(".video").innerHTML=`<iframe width="650" height="400" src="https://www.youtube.com/embed/khabhCrXHvU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
        document.querySelector(".video2").innerHTML=`<iframe width="650" height="400" src="https://www.youtube.com/embed/TooTjofiJXo?autoplay=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    //11 hane olmalıdır
    else if(sayiDizi.length != 11){
        document.getElementById("sonuc").innerHTML="Eksik Veya Fazla Hane Girdiniz."
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else if(onBirKontrol != Number(sayiDizi[10])){
        document.getElementById("sonuc").innerHTML="Hatalı TC Girişi"
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else if (onKontrol != Number(sayiDizi[9])){
        document.getElementById("sonuc").innerHTML="Hatalı TC Girişi"
        document.getElementById("tcno").value=""
        document.getElementById("tcno").focus()
    }
    else{
        document.getElementById("sonuc").innerHTML="Doğru TC Girişi Yaptınız"
    }
}



 