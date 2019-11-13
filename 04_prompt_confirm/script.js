var prenom = window.prompt('Quel est votre prénom ?');
console.log(prenom);
var homme = confirm('Est-ce que vous êtes un homme ?');
console.log(homme);
var civilite = null;

if (homme === true) {
    civilite = 'Monsieur';
}
else {
    civilite = 'Madame';
}
document.write('Bonjour ' + civilite + ' ' + prenom);

//Dict
var civdict = {true: 'Monsieur', false: 'Madame'};
document.write('<br>Bonjour ' + civdict[homme] + ' ' + prenom);

//Ternaire
civilite = homme ? 'Monsieur' : 'Madame';
document.write('<br>Bonjour ' + civilite + ' ' + prenom);
