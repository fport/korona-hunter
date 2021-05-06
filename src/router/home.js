let username = "";
function homeScreen(data) {
  return `
<div id="welcome" style="display: flex;">
<div class="screen-one-container">
    <input type="text" id="name" placeholder="isim gir">
    <button id="startGame" onclick="startGame()">oyuna gir</button> 
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
