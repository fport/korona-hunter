const gameSuccessScreen = (data) => `
<div  id='success' width="840" height="462">
<h1>Basarili oldun</h1>
</br>
<button class='btn' onClick="handleOnClick()">Devam et!</button>
</div>
`;

const gameOverScreen = (data) => `
<div  id='game-over' width="840" height="462">
<h1>Koronaya Yakalandin</h1>
<h2>Oyun Skoru : ${data.score}</h2>
</br>
<button class='btn' onClick="handleOnClick()">Halki koronadan kurtar</button>`;

const handleOnClick = () => {
  // window.location.reload();
  route("game", {});
};
