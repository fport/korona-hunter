let username = "";
function homeScreen(data) {
  return `
  <div id="welcome" style="display: flex;">
    <div class="home-container">
      <div class="home-wrapper">
        <div class="home-info">
          <a class="github" target="_blank" href="https://github.com/fport/korona-hunter">Proje Kodu</a>
          <a class="linkedin" target="_blank" href="https://linktr.ee/furkanportakal">Iletisim</a>
          <button class="docs" onClick="route('informationGame')">Dokumantasyon</button>
        </div>
        <div class="home-start-game">
          <input type="text" id="name" placeholder="isim gir">
          <button class="home-go-game" onclick="startGame()">oyuna gir</button> 
        </div>
      </div> 
    </div> 
    
  </div>
`;
}

function startGame() {
  let usernameInputValue = document.querySelector("#name").value;
  if (usernameInputValue) {
    localStorage.setItem("user", usernameInputValue);
    route("game", {});
  } else {
    if (localStorage.getItem("user")) {
      route("game", {});
    } else {
      alert("İsim giriniz");
    }
  }
}
