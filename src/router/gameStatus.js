const gameSuccessScreen = (data) => `
<div class="status-container">
  <div  id='success' width="840" height="462">
    <div class="status-succes-wrapper">
      <h1>Basarili oldun</h1>
      <h3>Bir sonraki aşamaya geç</h3>
      </br>
      <button class='btn' onClick="handleOnClick()">Devam et!</button>
    </div>
  </div>
</div>  
`;

const gameOverScreen = (data) => `
<div class="status-container">
  <div id='game-over' width="840" height="462">
    <div class="status-game-over-wrapper">
      <h1>Koronaya Yakalandin</h1>
      <h2>Oyun Skoru : ${30 - localStorage.getItem("killedKorona")}</h2>
      </br>
      <button class='btn' onClick="pushHome()">Halki koronadan kurtarmak icin tekrar oyna</button>
    </div>
  </div>
</div>
`;

const handleOnClick = () => {
  route("game", {});
};

const pushHome = () => {
  location.href = "";
  setTimeout(() => {
    location.hash = "game";
  }, 100);
};
