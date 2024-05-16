//fonction pour quitter le jeu dans le MENU en appuyant sur "EXIT"
var quit = document.getElementById("exit_button").addEventListener("click", function() {
    window.close();
});

//fonction du bouton play qui lance game.html
var launch = document.getElementById("play_button");
launch.addEventListener("click", function() {
    window.open ("game.html", "_blank");
});

//fonction du bouton regles qui lance le tuto
var rules = document.getElementById("regles");
rules.addEventListener("click", function() {
    window.open ("rules.html", "_blank");
});