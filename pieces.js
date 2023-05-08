// Récupération des pièces depuis le fichier JSON
const reponse = await fetch ("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i<pieces.length; i++) {
const article = pieces [i];
const pieceElement = document.createElement("article");
const imageElement = document.createElement ("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = ` Prix : ${article.prix} €  (${article.prix <35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie  ?? "(aucune catégorie)"; 
const descriptionElement = document.createElement ("p");
descriptionElement.innerText = article.description ?? "Pas encore de descriptif ";
const disponibiliteElement = document.createElement ("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock": "En rupture de stock " ;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(pieceElement);

pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(disponibiliteElement);
};
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function(){
    const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function(a, b){
            return a.prix -b.prix;
});
console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.prix <= 35;
    });
console.log(piecesFiltrees);
});

const boutonDecroissant =document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click",function (){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a, b){ 
            return b.prix -a.prix;
    });
    console.log(piecesOrdonnees);
});

const boutonNodescription = document.querySelector(".btn-nodesc");

boutonNodescription.addEventListener("click",function(){
    const piecesFiltrees =pieces.filter(function(piece){
        return piece.description 
    });
    console.log(piecesFiltrees);
});
const noms = pieces.map(piece=>piece.nom);
for (let i = noms.length-1; i>0;  i--) {
    if (pieces[i].prix>35){
        noms.splice(i,1)
    }
};
console.log(noms);
