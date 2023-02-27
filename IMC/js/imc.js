// Exercice : Calcul de l'IMC

// Formule : IMC = masse / hauteur ** 2

// 1. stocker les data dans des variables
// 2. Calculer les 2 imc
// 3. Afficher la comparaison des IMC dans un template litéral

// Alex pese 78 kg et mesure 1.69 m. John pese 92 kg et mesure 1.95m
// Alex pese 95 kg et mesure 1.88 m. John pese 85 kg et mesure 1.76m
// Afficher c'est ?? qui a L'imc la plus élevée

let person_1 = {
    name: "Alex",
    weight: 78,
    height: 1.69
}
let person_2 = {
    name: "John",
    weight: 92,
    height: 1.95
}
let resultat_compare = calculIMC(person_1, person_2); 
function calculIMC(name1, name2){
    let imc1;
    let imc2;
    imc1 = name1.weight/(name1.height)**2;
    imc2 = name2.weight/(name2.height)**2;
    if (imc1 > imc2){
        resultatIMC = person_1.name;
    } else {
        resultatIMC = person_2.name;
    }
    return resultatIMC;
}

console.log(resultat_compare);

