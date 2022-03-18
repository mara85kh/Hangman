const motEl = document.getElementById("mot");
const mauvaisesLettres = document.getElementById("mauvaises-lettres");
const rejouerBtn = document.getElementById("play-bouton");
const popup = document.getElementById("popup-contenant");
const notification = document.getElementById("notification-contenant");
const messageFinal = document.getElementById("message-final");

const figurePartie = document.querySelectorAll(".figure-partie");

const mots = ["chat", "chien", "hélicobite", "hamster", "lapin", "cheval"];

// Sélectionner un mot pour jouer
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];

// console.log(motSelectionne);

const bonnesLettresArr = ['a', 'c', 'h', 't', 'i', 'e', 'n', 'é', 'l', 'o', 'b', 'm', 's', 'r', 'p', 'v'];
const mauvaisesLettresArr = [];

// Afficher le mot caché

function afficherMots() {
  motEl.innerHTML = `
${motSelectionne
    .split("")
    .map(
  (lettre) => `
        <span class="lettre">
            ${bonnesLettresArr.includes(lettre) ? lettre : ""}
        </span>
        `
)
    .join('')

}


`;

const motInterne = motEl.innerText.replace(/\n/g, '');

console.log(motEl.innerText, motInterne); 

if (motInterne === motSelectionne) {

    messageFinal.innerText = 'Bravo, tu as gagné !'; 
    popup.style.display = 'flex'; ''

} 

}

//EVENT LISTENERS

window.addEventListener('keydown', e => {
    
    console.log(e.keyode); 


} )


afficherMot();
