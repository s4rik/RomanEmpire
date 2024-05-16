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

//alert des capitales
var capitale_ro = document.getElementById("capitale_romaine");
capitale_ro.addEventListener("click", function() {
    alert("Il s'agit de votre capitale !")
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

// Ajouter un gestionnaire d'événements de clic sur la carte
carte.addEventListener('click', (event) => {
  // Vérifier les coordonnées du clic par rapport aux centres des régions
  const clickX = event.clientX - carte.getBoundingClientRect().left;
  const clickY = event.clientY - carte.getBoundingClientRect().top;

  var aremorica = document.getElementById("region_Aremorica");

  var lutecia = document.getElementById("region_Lutecia");
  
  var sliva_carbonaria = document.getElementById("region_Sliva_Carbonaria");
  
  var germania_inferior = document.getElementById("region_Germania_Inferior");
  
  var senonia = document.getElementById("region_Senonia");
  
  var arduenna_silva = document.getElementById("region_Arduenna_Silva");
  
  var maxima_sequanorum = document.getElementById("region_Maxima_Sequanorum");
  
  var silva_nigra = document.getElementById("region_Silva_Nigra");
  
  var pictavis = document.getElementById("region_Pictavis");
  
  var gergovia = document.getElementById("region_Gergovia");
  
  var lugdunensis = document.getElementById("region_Lugdunensis");
  
  var helvetia = document.getElementById("region_Helvetia");
  
  var insubria = document.getElementById("region_Insubria");
  
  var aquitania = document.getElementById("region_Aquitania");
  
  var narbonesis = document.getElementById("region_Narbonesis");
  
  var transalpina = document.getElementById("region_Transalpina");
  
  var liguria = document.getElementById("region_Liguria");

  // Parcourir toutes les régions
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
        switch (i) {
          case 0:
              aremorica.style.display = "block";
              break;
          case 1:
              lutecia.style.display = "block";
              break;
          case 2:
              sliva_carbonaria.style.display = "block";
              break;
          case 3:
              germania_inferior.style.display = "block";
              break;
          case 4:
              senonia.style.display = "block";
              break;
          case 5:
              arduenna_silva.style.display = "block";
              break;   
          case 6:
              maxima_sequanorum.style.display = "block";
              break;
          case 7:
              silva_nigra.style.display = "block";
              break;
          case 8:
              pictavis.style.display = "block";
              break;
          case 9:
              gergovia.style.display = "block";
              break;
          case 10:
              lugdunensis.style.display = "block";
              break;
          case 11:
              helvetia.style.display = "block";
              break;
          case 12:
              insubria.style.display = "block";
              break;
          case 13:
              aquitania.style.display = "block";
              break;
          case 14:
              narbonesis.style.display = "block";
              break;
          case 15:
              transalpina.style.display = "block";
              break;
          case 16:
              liguria.style.display = "block";
              break;
          default:
            break;     
          
      }
  } else {

    switch (i) {
      case 0:
          aremorica.style.display = "none";
          break;
      case 1:
          lutecia.style.display = "none";
          break;
      case 2:
          sliva_carbonaria.style.display = "none";
          break;
      case 3:
          germania_inferior.style.display = "none";
          break;
      case 4:
          senonia.style.display = "none";
          break;
      case 5:
          arduenna_silva.style.display = "none";
          break;   
      case 6:
          maxima_sequanorum.style.display = "none";
          break;
      case 7:
          silva_nigra.style.display = "none";
          break;
      case 8:
          pictavis.style.display = "none";
          break;
      case 9:
          gergovia.style.display = "none";
          break;
      case 10:
          lugdunensis.style.display = "none";
          break;
      case 11:
          helvetia.style.display = "none";
          break;
      case 12:
          insubria.style.display = "none";
          break;
      case 13:
          aquitania.style.display = "none";
          break;
      case 14:
          narbonesis.style.display = "none";
          break;
      case 15:
          transalpina.style.display = "none";
          break;
      case 16:
          liguria.style.display = "none";
          break;
      default:
        break;
  }
}
  }
});

//Ci-dessous les variables des batiments

const ruralBuildingsType = [
    {
        name: 'farm',
        cost: {denarii: 100, lignum: 10, ferrum: 1, petra: 1},
        production: {victualia: 100},
        condition: 'none',
    },
    {
        name: 'fishery',
        cost: {denarii: 50, lignum: 5},
        production: {victualia: 50},
        condition: 'coastal_region',
    },
    {
        name: 'sawmill',
        cost: {denarii: 200},
        production: {lignum: 10},
        condition: 'none',
    },
    {
        name: 'quarry',
        cost: {denarii: 500, lignum: 10, ferrum: 2},
        production: {petra: 10},
        condition: 'none',
    },
    {
        name: 'ferrum_mine',
        cost: {denarii: 500, lignum: 10},
        production: {ferrum: 10},
        condition: 'ferrum_deposit',
    },
    {
        name: 'gold_mine',
        cost: {denarii: 500, lignum: 10, ferrum: 2},
        production: {ferrum: 10},
        condition: 'gold_deposit',
    },
]

const urbainBuildingsType = [
    {
        name: 'forum',
        cost: {denarii: 500, petra: 20},
        production: {denarri: 100},//+100 denarri par manupretium
        condition: 'none',//ordo >= 70 et un seul de ce type  
    },
    {
        name: 'bains',
        cost: {denarii: 500, petra: 10},
        production: {ordo: 10},
        condition: 'none',//un seul de ce type
    },
    {
        name: 'aqueducs',
        cost: {denarii: 1500, petra: 30},
        production: {ordo: 20},
        condition: 'none',//un seul de ce type
    },
    {
        name: 'amphithéâtre',
        cost: {denarii: 1000, petra: 20},
        production: {ordo: 20},
        condition: 'none',//un seul de ce type
    },
    {
        name: 'temple',
        cost: {denarii: 1000, petra: 20},
        production: {ordo: 10},
        condition: 'none',
    },
    {
        name: 'caserne',
        cost: {denarii: 1000, lignum: 10, petra: 5},
        production: {infanterie: 1},//par tour
        condition: 'none',//ordo > 50
    },
    {
        name: 'ecurie',
        cost: {denarii: 1000, lignum: 20, petra: 5},
        production: {cavalerie: 1},//par tour
        condition: 'none',//ordo > 50
    }
]

//Ci-dessous les variables des troupes

const troupes = [
    {
        name: 'hastati',//infanterie légère
        cost: {manupretium: 1, ferrum: 2},
        entretien: {victualia: 50, denarii: 100},
        condition: 'none',//{caserne},//un seul de ce type
        //statistiques: {santé: 10, moral: 5, puissance: 4, resistance: 0, vitesse: normale},  
    },
    {
        name: 'légionnaires',//infanterie lourde
        cost: {manupretium: 1, ferrum: 10},
        entretien: {victualia: 60, denarii: 120},
        condition: 'none',//{caserne},//un seul de ce type
        //statistiques: {santé: 10, moral: 10, puissance: 4, resistance: 2, vitesse: normale},
    },
    {
        name: 'auxiliaires de cavalerie',//cavalerie légère
        cost: {manupretium: 1, ferrum: 4},
        entretien: {victualia: 60, denarii: 120},
        condition: 'none',//{ecurie},//un seul de ce type
        //statistiques: {santé: 15, moral: 5, puissance: 3, resistance: 0, vitesse: rapide},
    },
    {
        name: 'equites',//cavalerie lourde
        cost: {manupretium: 1, ferrum: 14},
        entretien: {victualia: 80, denarii: 160},
        condition: 'none',//{ecurie},//un seul de ce type
        //statistiques: {santé: 15, moral: 10, puissance: 5, resistance: 1, vitesse: rapide},
    },
]

//variables boutons du tuto
var cadre_tuto = document.getElementById("cadre_tuto");
var skip = document.getElementById("button_skip_tuto");
var avatar = document.getElementById("avatar_tuto");
var text1 = document.getElementById("text_tuto1");
var text2 = document.getElementById("text_tuto2");
var text3 = document.getElementById("text_tuto3");
var text4 = document.getElementById("text_tuto4");
var text5 = document.getElementById("text_tuto5");
var fleche = document.getElementById("skip_text");

//event skip texte tutoriel
skip.addEventListener("click", function() {
    cadre_tuto.style.display = 'none';
    avatar.style.display = 'none';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    fleche.style.display = 'none';
});

//event next texte tutoriel
var currentParagraph = 1; // Variable pour suivre le paragraphe actuellement affiché

fleche.addEventListener("click", function() {
    if (currentParagraph === 1) {
        text1.style.display = 'none';
        text2.style.display = 'block';
        currentParagraph = 2;
    } else if (currentParagraph === 2) {
        text2.style.display = 'none';
        text3.style.display = 'block';
        currentParagraph = 3;
    } else if (currentParagraph === 3) {
        text3.style.display = 'none';
        text4.style.display = 'block';
        currentParagraph = 4;
    } else if (currentParagraph === 4) {
        text4.style.display = 'none';
        text5.style.display = 'block';
        currentParagraph = 5;
    } else if (currentParagraph === 5) {
        text5.style.display = 'none';
        cadre_tuto.style.display = 'none';
        avatar.style.display = 'none';
        fleche.style.display = 'none';
        skip.style.display = 'none';
    }
});


//event bouton de construction de chaque région

document.getElementById("constru_reg16").addEventListener("click", function() {
    // Ouvrir une nouvelle fenêtre avec des dimensions spécifiques
    var nouvelleFenetre = window.open("", "", "width=600,height=400");
    nouvelleFenetre.document.write("<h1>Constructions possibles sur Transalpina</h1>");
    nouvelleFenetre.document.write("<h2>Type de terrain : Rural et ville possible</h2>");
    nouvelleFenetre.document.write("<h3>Construire des bâtiments en ville :</h3>");
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Forum" /> Forum<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Bains" /> Bains<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Aqueduc" /> Aqueduc<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Amphitheatre" /> Amphitheatre<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Temple" /> Temple<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Caserne" /> Caserne<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Ecurie" /> Ecurie<br><br>');

    nouvelleFenetre.document.write("<h3>Construire bâtiments de type rural :</h3>");
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Ferme" /> Ferme<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Pecherie" /> Pecherie<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Camp de bûcherons" /> Camp de bûcherons<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Mine de fer" /> Mine de fer<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Mine or" /> Mine or<br>');
    nouvelleFenetre.document.write('<input type="radio" name="construction" value="Carriere" /> Carriere<br>');

    nouvelleFenetre.document.write('<input id=validation type="button" name="validation" value="Build" /> <br>');
    nouvelleFenetre.document.write('<p>Bâtiments construits :</p>');
    nouvelleFenetre.document.write(`
    <head>
        <style>
            body {
                background-color: rgb(168, 17, 17);
            }
            h1 {
                font-family: "Praetoria", sans-serif; /* Utilisation de la police personnalisée */
                font-size: 40px;
                text-align: center;
                position: relative;
                color: rgb(141, 96, 12);
                text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
                z-index: 1;
            }
            h2 {
                font-family: "Praetoria", sans-serif; /* Utilisation de la police personnalisée */
                text-align: center;
                position: relative;
                color: gold;
                text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
                z-index: 1;
            }
            h3 {
                font-family: "Praetoria", sans-serif; /* Utilisation de la police personnalisée */
                text-align: center;
                position: relative;
                color: gold;
                text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
                z-index: 1;
            }
            #validation {
                width: 100px;
                height: 60px;
                position: relative;
                top: 65%;
                font-size: 30px;
                font-weight: bold;
                display: flex;
                cursor: pointer;
                background-color: rgb(219, 181, 76);
                color: rgb(141, 96, 12);
                text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
                border: solid 5px rgb(238, 184, 5);
                border-radius: 20px;
            }
            #validation:hover {
                background-color: rgb(138, 25, 25);
            }
        </style>
    </head>
`);

});
var domination_romaine = document.getElementById("symbole_romain");