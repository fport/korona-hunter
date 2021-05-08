function informationGame(_data) {
  return `
     <div class="information-container">
        <div class="information-wrapper">

            <div class="information-info">
                <a class="github" target="_blank" href="https://github.com/fport/korona-hunter">Proje Kodu</a>
                <div class="information-start-game">
                    <a class="cikis" href="" onClick="removeLocalStorage()">Anasayfa'ya Git</a>
                </div>
                <a class="linkedin" target="_blank" href="https://linktr.ee/furkanportakal">Iletisim</a>
            </div>
            
            <div class="information-content">
                <h1 class="title">Nasıl oynayabilirsin ?</h1>
                </br>
                <h4 class="text">
                    Oyunumuza giriş yapmadan önce bizi giriş ekranımız karşılıyor. 
                    Dilerseniz oyuna isiminizi yazdıktan sonra oyuna giriş yapabilirsiniz.
                    Korona Hunter'ın açık kaynak koduna veya iletişim bilgilerine ulaşabilirsiniz.</h4>
                    <img id="folder" src="./assets/doc1.png" width="400px" height="auto">
                </br>
                <h4 class="text">Space(Bosluk) tuşumuz ile koronalara maske yollayarak imha edebilirsiniz. Sag ve Sol ok tuşlari ile düşman kurşunundan kaçabilirsiniz.</h4>
                <img id="folder" src="./assets/doc-game.png" width="400px" height="auto">
                </br>
                <h4 class="text"> 
                    Oyunu basarili veya başarısız bitirdiğimiz taktirde bizi altta belirttiğimiz ekranlar karşılıyor. 
                    Eger basarili olunduğu taktirde bir sonraki seviyeye geçebilirsin. 
                    Başarısız olunduğu taktirde bizi ana ekrana geçebilirsin. 
                    Tekrar oynamak istediğinde giris yapabilir ve tekrardan oyuna ulaşabilirsin.</h4>
                <img id="folder" src="./assets/doc2.png" width="400px" height="auto">
                <img id="folder" src="./assets/doc3.png" width="400px" height="auto">
            </div>

            <div class="information-content">
                <h1 class="title">Senaryo</h1>
                <p class="text">
                    Yakın zamanlarda dünyadan gezegenimize gelen kişiler ile birlikte korona virüsleri de geldiği ortaya çıkmıştır. 
                    Ve kendini bu konuya adayan sağlık çalışanımız korona virüslerini imha etmek için elinden geleni ortaya koyar. 
                    Koronalar portakallı korona virüsü yollar. Sağlık çalışanımız buna karşılık maske yollayarak korona virüslerini imha eder.
                    Düşük seviyede olan koronalar imha edilirse bir sonraki seviyeye geçilerek devam edilir. 
                    Eğer ki koronalar tarafından virüs kaparsa halkta buna bağlı olarak koronaya yakalanacaktır. Dikkatli ol halkı kurtar!
                </p>
            </div>

            <div class="information-content">
                <h1 class="title">Oyun Sahnesi</h1>
                <p class="text">
                    Oyun sahnesi olarak 3 çeşitler sahne içeriyor. 
                    Ana oyunun oynalındığı ekran, koronaları başarılı bir şekilde imha edildiğinde bizi karşılayacak ekran,
                    ve son olarak basarisiz olunduğunda bizi karsilicak ekran olmak üzere oyun sahnelerini içeriyor. 
                    Projenin giriş ekranından ulaşabilceğimiz oyunun nasıl oynancagini ve projenin detaylarını anlatılan bilgiler yer alıyor. 
                </p>
            </div>
            
            <div class="information-content">
                <h1 class="title">Oyunun Chrome ve Firefox Üzerinde Calismasi</h1>
                <p class="text">
                Oyunun iki platformda da calismasini odaklanarak kodlanmistir.
                </p>
            </div>

            <div class="information-content">
                <h1 class="title">Proje Detaylari</h1>
                <p class="text">
                Proje klasör yapisini düzenli ve belirli bir yapı takip edilerek düzenlenmiştir. 
                Oluşturulan klasör yapisi şu sekildedir ↓</p>
                <img id="folder" src="./assets/folder.png" width="300px" height="auto">
            </div>
            
            <div class="information-content">
                <h1 class="title">Proje Karakter Cizimleri</h1>
                <p class="text">
                    Tasarımı Figma üzerinden yapılmış olan karakterler Furkan Portakal tarafından çizilmiştir.
                    Çizimleri görüntülemek için &nbsp;<a href="https://www.figma.com/file/kTrF4iPtA7oYXXJqy539Ur/Korona-Avc%C4%B1s%C4%B1?node-id=0%3A1" target="_blank" id="link"> tıkla</a>
                 </p>
            </div>
            
        </div>
    </div>
`;
}
