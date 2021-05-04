const SCREEN_1 = document.getElementById('welcome')
const SCREEN_2 = document.getElementById('game')

document.getElementById("myBtn").addEventListener("click", function() {
    SCREEN_1.style.display = "none";
    SCREEN_2.style.display = "flex";
    localStorage.setItem('screen',1)
});