import { ajoutListenersAvis,ajoutListenerEnvoyerAvis } from "./avis.js";

let pieces = window.localStorage.getItem("pieces");
if (pieces=== null) {
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch ("http://localhost:8081/pieces/");
const pieces = await reponse.json();
// Transformation des pieces en JSON
const valeurPieces = JSON.stringify(pieces);
// Stockages dans le localStorage
window.localStorage.setItem("pieces", valeurPieces);
} else {
    pieces = JSON.parse(pieces);
}


ajoutListenerEnvoyerAvis()


function genererPieces(pieces) {
    for (let i = 0; i<pieces.length; i++) {
         const article = pieces[i];

          // Récupération de l'élément du DOM qui accueillera les fiches

        const sectionFiches = document.querySelector(".fiches");
        const pieceElement = document.createElement("article");

        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `prix: ${article.prix} €  (${article.prix<35 ? " €" : " €€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(sans catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "En rupture de stock";

        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id ;
        avisBouton.textContent = "Afficher les avis ";

        

        sectionFiches.appendChild(pieceElement);
        
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
       

        pieceElement.appendChild(avisBouton);
       
         }
        
         ajoutListenersAvis();
}
genererPieces(pieces);

// ajout du listener pour trier par ordre de prix croissant 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a, b) {
       return a.prix - b.prix;

    });
    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);

});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click",function(){
    const piecesFiltrees = pieces.filter(function(pieces){
       return  pieces.prix<35; 
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);

});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);

});

const boutonNodescription = document.querySelector(".btn-nodesc");

boutonNodescription.addEventListener("click", function(){
    const piecesFiltree = pieces.filter(function(pieces){
        return  pieces.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltree);
});
// exercice fonction map pour avoir les noms des articles abordables
const noms = pieces.map(piece=>piece.nom);
 for(let i= pieces.length -1; i>= 0 ; i--) {
     if(pieces[i].prix > 35) {
        noms.splice(i,1);
     };
 }
const abordablesElements =  document.createElement("ul");
 for (let i = 0; i<noms.length; i++) {
    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
 }

document.querySelector(".abordables")
.appendChild(abordablesElements);


// Listes des pieces disponible avec leurs prix 

const nomsDisponibles = pieces.map(piece => piece.nom )
const prixDisponibles = pieces.map(piece => piece.prix)

for (let i = pieces.length -1; i >=0; i--){
    if (pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}

const disponiblesElement = document.createElement("ul");

for (let i=0; i < nomsDisponibles.length; i++){
 const nomElement =  document.createElement("li");
 nomElement.innerText =`${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement("p");
pElementDisponible.innerText = "Pieces disponibles :";
document.querySelector(".disponibles").appendChild(pElementDisponible).appendChild(disponiblesElement)



// bouton prix max
const inputPrixMax = document.querySelector("#prix-max");

inputPrixMax.addEventListener("input", function(){
    const piecesFiltrees = pieces.filter(function(pieces){
        return pieces.prix<= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees)
});

//  Ajout du listener pour mettre à jour des données du local storage 
const boutonMettreAjour = document.querySelector(".btn-maj");
boutonMettreAjour.addEventListener("click",function(){
    window.localStorage.removeItem("pieces");
});