
const pieces = await fetch("pieces-autos.json").then(pieces=>pieces.json());

// Fonction qui génère toutes la page web (fiches)
function genererPieces(pieces){
for(let i=0; i<pieces.length;i++){
   const pieceElement = document.createElement("article");

   const imageElement = document.createElement("img");
   imageElement.src = pieces[i].image;
   pieceElement.appendChild(imageElement);
   const nomElement = document.createElement("h2");
   nomElement.innerText = pieces[i].nom;
   pieceElement.appendChild(nomElement);
   const prixElement = document.createElement("p");
   prixElement.innerText = ` "prix" :  ${pieces[i].prix } € (${pieces[i]<=35 ? €: €€€})`;
   pieceElement.appendChild(prix);
   const categorieElement = document.createElement("p");
   categorieElement.innerText = pieces[i].categorie ?? ; "(Sans catégorie";
   pieceElement.appendChild(categorie);
   const descriptionElement = document.createElement("p");
   descriptionElement.innerText = pieces[i].description ?? "En attente de descriptif";
   pieceElement.appendChild(descriptionElement);
   const disponibilite = document.createElement("p");
   disponibiliteElement.innerText = pieces[i].disponibilite ?"En stock" : "En rupture de stock";
   pieceElement.appendChild(disponibiliteElement);

   document.body.appendChild(pieceElement);
   
};
};

genererPieces(pieces);













































// // Récupération des pièces depuis le fichier JSON
// const reponse = await fetch ("pieces-autos.json");
// const pieces = await reponse.json();

// for (let i = 0; i<pieces.length; i++) {
// const article = pieces [i];
// const pieceElement = document.createElement("article");
// const imageElement = document.createElement ("img");
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerText = ` Prix : ${article.prix} €  (${article.prix <35 ? "€" : "€€€"})`;
// const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie  ?? "(aucune catégorie)"; 
// const descriptionElement = document.createElement ("p");
// descriptionElement.innerText = article.description ?? "Pas encore de descriptif ";
// const disponibiliteElement = document.createElement ("p");
// disponibiliteElement.innerText = article.disponibilite ? "En stock": "En rupture de stock " ;

// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appendChild(pieceElement);

// pieceElement.appendChild(imageElement);
// pieceElement.appendChild(nomElement);
// pieceElement.appendChild(prixElement);
// pieceElement.appendChild(categorieElement);
// pieceElement.appendChild(descriptionElement);
// pieceElement.appendChild(disponibiliteElement);
// };
// const boutonTrier = document.querySelector(".btn-trier");

// boutonTrier.addEventListener("click", function(){
//     const piecesOrdonnees = Array.from(pieces);
//         piecesOrdonnees.sort(function(a, b){
//             return a.prix -b.prix;
// });
// console.log(piecesOrdonnees);
// });

// const boutonFiltrer = document.querySelector(".btn-filtrer");

// boutonFiltrer.addEventListener("click", function(){
//     const piecesFiltrees = pieces.filter(function(piece) {
//         return piece.prix <= 35;
//     });
// console.log(piecesFiltrees);
// });

// const boutonDecroissant =document.querySelector(".btn-decroissant");

// boutonDecroissant.addEventListener("click",function (){
//     const piecesOrdonnees = Array.from(pieces);
//     piecesOrdonnees.sort(function(a, b){ 
//             return b.prix -a.prix;
//     });
//     console.log(piecesOrdonnees);
    
    
// });

// const boutonNodescription = document.querySelector(".btn-nodesc");

// boutonNodescription.addEventListener("click",function(){
//     const piecesFiltrees =pieces.filter(function(piece){
//         return piece.description 
//     });
//     console.log(piecesFiltrees);
// });
// const noms = pieces.map(piece=>piece.nom);
// for (let i = noms.length-1; i>0;  i--) {
//     if (pieces[i].prix>35){
//         noms.splice(i,1)
//     }
// };

// const abordablesElements = document.createElement("ul");

// for ( let i=0;  i<noms.length; i++) {
//     const nomElement = document.createElement("li");
//     nomElement.innerText =noms[i];
//     abordablesElements.appendChild(nomElement);
// }
// document.querySelector(".abordables")
// .appendChild(abordablesElements)
