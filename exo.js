// Créer un nb aleatoire 
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//
// const randomNum = getRandomInt(10)
// console.log(randomNum)
//
// let chances = 3
//
// while(chances > 0) {
//     //L'utilisateur rentre un nb 
//     let number = parseInt(prompt("Entrez un nombre"));
//     console.log(number)
//
//     if(number === randomNum) {
//         alert("Bien joué !!")
//         break
//     } else if(number <randomNum){
//         alert("Essaye plus grand")
//     } else{
//         alert("Essaye un numéro plus petit")
//     }
//
//     chances--;
// }

// Consignes nombre mystère (fin):
// Créer un champ de formulaire pour demander le nombre à l'utilisateur.
// Afficher dans une balise p le fameux "c'est plus, c'est moins, c'est gagné". Si c'est gagné azjouter une classe à mon p pour rendre le texte bien plus grand et visible.
//
// Afficher aussi au fur et à mesure la liste des essais de mon utilisateur

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function startGame() {
    let maxNumber;
    let attempts;
    
    let difficulty = prompt("Choisissez un mode de difficulté : \n1. Facile (1-20, 8 essais) \n2. Moyen (1-50, 5 essais) \n3. Difficile (1-100, 3 essais)");

    // Définir les valeurs de maxNumber et attempts en fonction de la difficulté choisie
    switch (difficulty) {
        case '1':
            maxNumber = 20;
            attempts = 8;
            break;
        case '2':
            maxNumber = 50;
            attempts = 5;
            break;
        case '3':
            maxNumber = 100;
            attempts = 3;
            break;
    }

    const randomNum = getRandomInt(maxNumber);
    console.log(randomNum); 

    while (attempts > 0) {
        let number = parseInt(prompt(`Devinez le nombre entre 1 et ${maxNumber} :`));

        if (number === randomNum) {
            alert("Bien joué !! Vous avez deviné le nombre !");
            break;
        } else if (number < randomNum) {
            alert("C'est plus !");
        } else {
            alert("C'est moins !");
        }

        attempts--;
    }
}

startGame();

