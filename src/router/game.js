function gameScreen(data) {
  const user = localStorage.getItem("user") || "";
  return `
  <div class="game-container">
    <div class="game-information">
      <div class="username"> Username : ${user}</div>
      <a href="/" onClick="removeLocalStorage()">Oyundan Çıkış Yap</a>
    </div>
    <canvas id="canvas" width="840" height="462"></canvas>
    <img id="korona" src="./assets/korona.png" style="display: none;">
    <img id="player" src="./assets/player.png" style="display: none;">
  </div>
  `;
}

const removeLocalStorage = () => {
  localStorage.removeItem("user");
};
