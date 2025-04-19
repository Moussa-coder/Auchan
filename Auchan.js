const produits = [
    { nom: "Riz Thaï parfumé 5kg", prix: 4500, image: "./Assets/Riz 1.jpg" },
    { nom: "Huile d’arachide 1L", prix: 2500, image: "./Assets/huile 2.jpg" },
    { nom: "Sucre en poudre 1kg", prix: 1000, image: "./Assets/sucre 3.jpg" },
    { nom: "Pâtes Spaghetti 500g", prix: 700, image: "./Assets/patte 4.jpg" },
    { nom: "Farine de blé 1kg", prix: 900, image: "./Assets/farine 5.jpg" },
    { nom: "Haricots rouges 500g", prix: 800, image: "./Assets/Haricot rouge 6.jpg" },
    { nom: "Lentilles blondes 1kg", prix: 1300, image: "./Assets/lentilles 7.jpg" },
    { nom: "Café soluble Nescafé 100g", prix: 2200, image: "./Assets/Nescafé 8.jpg" },
    { nom: "Céréales Corn Flakes 500g", prix: 1800, image: "./Assets/Céréale 9.jpg" },
    { nom: "Chocolat Nestlé 100g", prix: 900, image: "./Assets/Chocolat 10.jpg" },

    { nom: "Lait Candia 1L", prix: 950, image: "./Assets/lait 11.jpg" },
    { nom: "Fromage râpé Président 150g", prix: 1700, image: "./Assets/fromage 12.jpg"},
    { nom: "Yaourt nature 125g", prix: 300, image: "./Assets/Yaourt 13.jpg" },
    { nom: "Beurre doux Président 250g", prix: 1500, image: "./Assets/beure14.jpg" },
    { nom: "Poulet entier 1.5kg", prix: 3500, image: "./Assets/poulet 15.jpg" },
    { nom: "Filets de poisson 500g", prix: 3200, image: "./Assets/filet de poisson 16.jpg" },
    { nom: "Œufs frais x12", prix: 2000, image: "./Assets/oeufs 17.jpg" },
    { nom: "Tomates fraîches 1kg", prix: 800, image: "./Assets/Tomate 18.jpg" },
    { nom: "Pommes Golden 1kg", prix: 1800, image: "./Assets/Pomme 19.jpg" },
    { nom: "Carottes 1kg", prix: 700, image: "./Assets/Carottes 20.jpg" },

    { nom: "Frites surgelées 1kg", prix: 1600, image: "./Assets/Frittes 21.jpg" },
    { nom: "Petits pois surgelés 500g", prix: 1200, image: "./Assets/Petits Pois 22.jpg" },
    { nom: "Brocolis surgelés 400g", prix: 1100, image: "./Assets/Brocolis 223.jpg" },
    { nom: "Pizza 4 fromages", prix: 2500, image: "./Assets/Pizza 24.jpg" },
    { nom: "Crevettes décortiquées 500g", prix: 4000, image: "./Assets/Crevettes 25.jpg" },

    { nom: "Jus de bissap 1L", prix: 900, image: "./Assets/Bissap 26.jpg" },
    { nom: "Coca-Cola 1,5L", prix: 800, image: "./Assets/Coca Cola 27.jpg" },
    { nom: "Eau minérale Kirène 1,5L", prix: 500, image: "./Assets/Kirène 28.jpg" },
    { nom: "Boisson énergisante XXL", prix: 700, image: "./Assets/Boison 29.jpg" },
    { nom: "Jus de mangue 1L", prix: 950, image: "./Assets/Jus 30.jpg" }
];

const afficherProduits = () => {
    const container = document.getElementById("products-container");
    produits.forEach(produit => {
        const produitHTML = ` 
            <div class="produit">
                <img src="${produit.image}" alt="${produit.nom}">
                <h3>${produit.nom}</h3>
                <p>${produit.prix} FCFA</p>
                <button class="ajouter-panier">Ajouter au panier</button>
            </div>`;
            container.insertAdjacentHTML("beforeend", produitHTML)
    });
};

window.onload = afficherProduits;