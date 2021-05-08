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
                <h1 class="title">Senaryo</h1>
                <p class="text">Yakin zamanlarda dünyadan gezegenimize gelen kişilerden korona virüsleri geldiği ortaya cikmistir. Ve kendini bu konuya adayan sağlık çalisanimiz korona virüslerini imha etmek için elinden geleni ortaya koyar. Düşük seviyede olan koronalar imha edilirse bir sonraki seviyeye geçilerek devam edilir. Eğer ki koronalar tarafından virüs kaparsa halkta buna bağlı olarak koronaya yakalanacaktır.</p>
            </div>

            <div class="information-content">
                <h1 class="title">Oyun sahnesi</h1>
                <p class="text">Oyun sahnesi olarak 3 çeşitler sahne içeriyor. Ana oyunun oynandigi, basarili olunduğunda bir sonraki asamaya gecilen  ve son olarak basarisiz olunduğunda bizi karsilicak oyun sahneleri içeriyor. Projenin giriş ekranı ve oyunun nasıl oynancagini anlatacagimiz dokümantasyon sayfalari bulunuyor. </p>
            </div>
            
            <div class="information-content">
                <h1 class="title">Oyunun Chrome ve Firefox Calismasi</h1>
                <p class="text">Oyunun iki platformda da calismasini odaklanarak kodlanmistir.</p>
            </div>

            <div class="information-content">
                <h1 class="title">Proje Detaylari</h1>
                <p class="text">Projeniz klasör hapisini düzenli bir sekilde hazirlanmistir. Oluşturmuş oldugum klasör yapisi su sekildedir:</p>
                <img id="folder" src="./assets/folder.png" width="300px" height="auto">
            </div>
            
            <div class="information-content">
                <h1 class="title">Proje Karakter Cizimleri</h1>
                <p class="text"> Kendi cizdigim karakterler ile oyunu yaptim. Cizimler icin &nbsp;<a href="https://www.figma.com/file/kTrF4iPtA7oYXXJqy539Ur/Korona-Avc%C4%B1s%C4%B1?node-id=0%3A1" target="_blank" id="link"> tikla</a></p>
            </div>
            
            <div class="information-content">
                <h1 class="title">Oyunun Oynanmasi</h1>
                <h3 class="text">Korona Hunter oyununu oynamasi su sekildedir : </h3>
                </br>
                <h4 class="text">Oyunumuza giris yapmadan once bizi bir ekran karsiliyor. Dilersek oyunun acik kaynaklarini gorebilirsiniz. Dilerseniz oyuna isiminizi yazdiktan sonra oyuna giris yapabilirsiniz.</h4>
                <img id="folder" src="./assets/doc1.png" width="400px" height="auto">
                </br>
                <h4 class="text"> <strong>Space(Bosluk)</strong> tusumuz ile koronalara ates edebiliyoruz.&nbsp;<strong>Sag ve Sol</strong> ok tuslari ile dusman atesinden kacabiliyoruz.</h4>
                <img id="folder" src="./assets/doc-game.png" width="400px" height="auto">
                </br>
                <h4 class="text"> Oyunu basarili veya basarisiz bitirdigimizde bizi altta belirttigimiz ekranlar karsiliyor. Eger basarili oldu isek bir sonraki seviyeye gecebiliyoruz. Basarisiz oldugumuzda bizi ana ekrana yonlendiriyor. Bu sayede tekrar giris yapabilir hale geliyoruz.</h4>
                <img id="folder" src="./assets/doc2.png" width="400px" height="auto">
                <img id="folder" src="./assets/doc3.png" width="400px" height="auto">
            </div>

        </div>
    </div>
`;
}
