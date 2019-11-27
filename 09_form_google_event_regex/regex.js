function validation(e){
    // regexp commence toujours par un "/"
    var regexempty = /^\s*$/; // vérifie si la chaîne commence et termine par 0 ou plusieurs espaces.
    var regex = /^[a-zA-Z\s]+$/; // vérifie si la chaîne commence et termine par au moins un caractère entre a-z et/ou A-Z.
    var value = e.srcElement.q.value;
    if(regexempty.test(value)){
        document.getElementById('alert').innerHTML = 'Tu ne recherches rien...';
        e.preventDefault();
    }
    else if(!regex.test(value)){
        document.getElementById('alert').innerHTML = 'Uniquement des mots contenant des lettres entre A et Z en majuscule et/ou minuscule';
        e.preventDefault();
    }
}

// On se souscrit à l'event DOMContentLoaded du document.
// De cette façon, le chargement du javascript peut se faire dans la balise <head> car la fonction anonyme liée à l'event ne sera exécutée qu'après le chargement du DOM.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('monform').addEventListener("submit", function() {validation(event);});
});
