//Musique du jeu
var pauseMusique = document.getElementById('pause_musique');
var jouerMusique = document.getElementById('jouer_musique');
var audio = document.getElementById('GameMusique');

pauseMusique.addEventListener('click', function() {
    audio.pause();
});

jouerMusique.addEventListener('click', function() {
    audio.play();
});

//nombre de régions
const nbRegions = 17;

//coordonnées des centres des 17 régions
const regionsCentersCoords = [
    [262,360], [427,338], [527,208],
    [688,154], [596,356], [698,266],
    [739,379], [848,308], [399,476],
    [517,537], [642,509], [794,458],
    [825,543], [371,643], [502,678],
    [652,655], [772,611]
]

//noms des régions
const regionsNames = [
    "Aremorica", "Lutecia", "Sliva Carbonaria",
    "Germania Inferior", "Senonia", "Arduenna Silva",
    "Maxima Sequanorum", "Silva Nigra", "Pictavis",
    "Gergovia", "Lugdunensis", "Helvetia",
    "Insubria", "Aquitania", "Narbonesis",
    "Transalpina", "Liguria"
];

//event et apparition des coord de la souris une fois qu'on est sur la map
const localMousePosText = document.getElementById('mouse_pos');
const carte = document.getElementById('carte');

let localMousePos = { x: undefined, y: undefined };

carte.addEventListener('mousemove', (event) => {
  const boundingRect = carte.getBoundingClientRect();
  const localX = Math.floor(event.clientX - boundingRect.left);//pour avoir des coord en nombres entiers et non à virgules
  const localY = Math.floor(event.clientY - boundingRect.top);//pour avoir des coord en nombres entiers et non à virgules
  

  localMousePos = { x: localX, y: localY };
  localMousePosText.textContent = `(${localMousePos.x}, ${localMousePos.y})`;
});

// Cacher les coordonnées lorsque la souris quitte la carte
carte.addEventListener('mouseleave', () => {
  localMousePosText.textContent = '';
});

// Ajouter un gestionnaire d'événements de clic sur la carte
carte.addEventListener('click', (event) => {
    // Vérifier les coordonnées du clic par rapport aux centres des régions
    const clickX = event.clientX - carte.getBoundingClientRect().left;
    const clickY = event.clientY - carte.getBoundingClientRect().top;
  
    for (let i = 0; i < nbRegions; i++) {
        const regionCenterX = regionsCentersCoords[i][0];
        const regionCenterY = regionsCentersCoords[i][1];
        const tolerance = 25; // Tolerance de 25 pixels autour du centre de la région
  
        // Vérifier si le clic est dans la zone autour du centre de la région
        if (
          clickX >= regionCenterX - tolerance &&
          clickX <= regionCenterX + tolerance &&
          clickY >= regionCenterY - tolerance &&
          clickY <= regionCenterY + tolerance
        ) {

          const regionName = regionsNames[i];

          // Afficher le nom de la région
          alert(`Bienvenue à "${regionName}" !`);
          return; // Sortir de la boucle dès qu'une région est trouvée
        }
    }
});

