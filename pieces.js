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
    const pieceFiltrees = pieces.filter(function(piece) {
        return piece.prix <= 35;
    });
console.log(pieceFiltrees);
});

const boutonTrierDecroissant =document.querySelector(".btn-decroissant");

boutonTrierDecroissant.addEventListener("click",function (){
    const piecesDecroissant = Array.from(pieces);
        piecesDecroissant.sort(function(a, b){ 
            return b.prix -a.prix;
    });
    console.log(piecesDecroissant);
});

const boutonNodesc = document.querySelector(".btn-nodesc");

boutonNodesc.addEventListener("click",function(){
    const pieceNodesc =pieces.filter(function(piece){
        return piece.description 
    });
    console.log(pieceNodesc);
});