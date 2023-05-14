// Récupération des pièces depuis le fichier JSON
const reponse = await fetch ("pieces-autos.json");
const pieces = await reponse.json();


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

        
        sectionFiches.appendChild(pieceElement);
        
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);

         }
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

const inputPrixMax = document.querySelector("#prix-max");

inputPrixMax.addEventListener("input", function(){
    const piecesFiltrees = pieces.filter(function(pieces){
        return pieces.prix<= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees)
});






















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

// document.querySelector(".fiches").innerHTML = "";

// const pieces = await fetch("pieces-autos.json").then(pieces=>pieces.json());

// // Fonction qui génère toute la page web (fiches)
// function genererPieces(pieces) {
//   for (let i = 0; i < pieces.length; i++) {
//     const pieceElement = document.createElement("article");

//     const imageElement = document.createElement("img");
//     imageElement.src = pieces[i].image;
//     pieceElement.appendChild(imageElement);

//     const nomElement = document.createElement("h2");
//     nomElement.innerText = pieces[i].nom;
//     pieceElement.appendChild(nomElement);

//     const prixElement = document.createElement("p");
//     prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix <= 35 ? "€" : "€€€"})`;
//     pieceElement.appendChild(prixElement);

//     const categorieElement = document.createElement("p");
//     categorieElement.innerText = pieces[i].categorie ?? "(Sans catégorie)";
//     pieceElement.appendChild(categorieElement);

//     const descriptionElement = document.createElement("p");
//     descriptionElement.innerText = pieces[i].description ?? "En attente de descriptif";
//     pieceElement.appendChild(descriptionElement);

//     const disponibiliteElement = document.createElement("p");
//     disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "En rupture de stock";
//     pieceElement.appendChild(disponibiliteElement);

//     document.body.appendChild(pieceElement);
//   }
// }

genererPieces(pieces);
