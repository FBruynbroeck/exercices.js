var prenom = 'Michel'; //string -> string
var age = 23; //integer -> number
var celibataire = true; //boolean -> boolean
var taille = 1.8; //float -> number
var neant = null;
console.log(typeof(prenom));

var consoles = [];

var consoles = ['Xbox', 'PS4']; // array -> object
var consolesdict = {0: 'Xbox',
                    1: 'PS4'};
var dict = {};
var dict = {'Claude': 32}; // dict -> object
//Type des variables
//alert('Prénom: ' + typeof(prenom));
//alert('Age: ' + typeof(age));
//alert('Célibataire: ' + typeof(celibataire));
//alert('Taille: ' + typeof(taille));
//alert('Console: ' + typeof(consoles));
//alert('Dict: ' + typeof(dict));

//Incrémenter l'âge de plusieurs façon
//age = age + 1;
//age += 1;
//age = ++age; //suffixe
//var test = age++; //préfixe
//console.log(age);

//Concaténation de string
var nom = 'Dupont';
//console.log(prenom + ' ' + nom);

//Concaténation d'une string avec un integer
//console.log('1 '+2);
//console.log(parseInt('1') + 2);

//Ajouter/Supprimer des éléments d'un array
var consoles = ['Xbox', 'PS4']; // array -> object
//consoles.push('Switch'); //Rajoute un élément à la fin de la liste
//consoles.splice(1, 0, 'Switch'); //Rajoute un élément en position 1
//consoles.splice(0, 2); // Supprime 2 éléments à partir de la position 0
//consoles.splice(consoles.indexOf('PS4'), 1); // Supprime l'élément PS4
consoles = consoles.concat(['GameBoy', 'NES']); // Ajoute un array dans un array
console.log(consoles.join(','));

//Ajouter/Supprimer des éléments d'un dictionnaire
var dict = {'Claude': 32}; // dict -> object
dict.Jean = 6;
//dict['Pierre'] = 4; // à éviter
delete dict.Claude;
console.log(dict);
