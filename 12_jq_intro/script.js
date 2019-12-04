// 3 manières de se souscire à l'event de chargement du DOM en jQuery

// se souscire avec la méthode ready de jQuery en ajoutant le document en paramètre + function anonyme
$(document).ready(function(){
    //le DOM est chargé
    $('#hello').html('Hello World');
    $('.classetest').html('Test avec classe');
});

// se souscire avec la méthode ready de jQuery en ajoutant le document en paramètre + function nommée
//function mafonction() {
    //le DOM est chargé
//    $('#hello').html('Hello World');
//}
//jQuery(document).ready(mafonction);

// se souscire en envoyant directement une fonction anonyme comme paramètre
//$(function() {
//    le DOM est chargé
//    $('#hello').html('Hello World');
//});
