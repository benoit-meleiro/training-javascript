// let monTableau = [20, 54, 33,68]

// let monTotal = monTableau[0] + monTableau[1]+ monTableau[2] + monTableau[3];
// console.log(monTotal)

// let identite_1 = {
//     prenoms : ['Ben','olivier'],
//     age : 50,
//     ville : 'Toulouse',
//     aSonPermis : true
// };
// let identite_2 = {
//     prenoms : ['tom','bernard'],
//     age : 16,
//     ville : 'Paris',
//     aSonPermis: false
// };
// let identities = [identite_1,identite_2];
// if(identities[0].age < 18){
//     console.log(identities[0].ville);
// }
// if(identities[1].age < 18){
//     console.log(identities[1].ville);
// }else{
//     console.log(text);
    
// }

// let myNumber = 5;
// function addNumber (numberToAdd){
//     myNumber += numberToAdd
// }

// addNumber(10)
// console.log(myNumber);

///////////////////////////////////////////////////

// let identity = "Benoit"
// zouZou("Meleiro")
// console.log(identity);
// function zouZou (myName){
//     identity += " " + myName  
// }
//////////////////////////////////////////////////

// let motsSinguliers = ["maison","fleur","voiture","cheval","cheveu"];
// let motsPluriels = metAuPluriel(motsSinguliers[4])

// function metAuPluriel(mot){
//     let terminaison = mot.slice(mot.length - 2);
//     let resultat;
//     if (terminaison =='al' || 'eu'){
//         let motSansFin = mot.slice(0,mot.length - 1)
//         resultat = motSansFin + "ux";
//     } else{
//         resultat = mot + "s"
//     }
//     return resultat
// }

// console.log(motsPluriels);

/////////////////////////////////////////////////////
 

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