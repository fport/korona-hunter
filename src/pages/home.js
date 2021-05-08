let username = "";
function homeScreen(data) {
  return `
  <div id="welcome" style="display: flex;">
    <div class="home-container">
      <div class="home-wrapper">
      
        <div class="home-content-top">
          <img id="korona" src="./assets/korona.png" width="50px" height="auto">
          <span class="home-game-name">korona hunter</span>
          <img id="korona" src="./assets/player.png" width="50px" height="auto">
        </div>

        <div class="home-info">
          <a class="github" target="_blank" href="https://github.com/fport/korona-hunter">Proje Kodu</a>
          <a class="linkedin" target="_blank" href="https://linktr.ee/furkanportakal">İletisim</a>
          <button class="docs" onClick="route('informationGame')">Dökümantasyon</button>
        </div>

        <div class="home-start-game">
          <input type="text" id="name" placeholder="isim gir" value="${userName}">
          <button class="home-to-game" onclick="startGame()">oyuna gir</button> 
        </div>

      </div> 
    </div> 
    
  </div>
`;
}

const userName = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : "";

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
