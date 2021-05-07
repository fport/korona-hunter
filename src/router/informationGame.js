function informationGame(_data) {
  return `
     <div class="information-container">
        <div class="information-wrapper">
              <div class="information-info">
              <a class="github" target="_blank" href="https://github.com/fport/korona-hunter">Proje Kodu</a>
              <a class="linkedin" target="_blank" href="https://linktr.ee/furkanportakal">Iletisim</a>
              <button class="docs" onClick="route('informationGame')">Dokumantasyon</button>
            </div>
            <div class="information-start-game">
             <a class="cikis" href="/" onClick="removeLocalStorage()">Anasayfa'ya Git</a>
            </div>
            <div class="information-content">
                <span class="title">Title</span>
                <p class="text">lorem</p>
            </div>
            <div class="information-content">
                <span class="title">Title</span>
                <p class="text">lorem</p>
            </div>
            <div class="information-content">
                <span class="title">Title</span>
                <p class="text">lorem</p>
            </div>
        </div>
    </div>
`;
}
