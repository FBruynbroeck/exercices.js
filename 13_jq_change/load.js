//this = L'objet JavaScript représentant le contexte dans lequel le code courant est exécuté.
//dans le cas de la fonction changement, la valeur "this" sera l'élément qui exécute la fonction. Ici: l'élement #monselect
function changement() {
    if ($('.choix:visible').length) {
        $('.choix').slideUp(800);
        $('#' + this.value).delay(1000).slideDown(800);
    }
    else {
        $('#' + this.value).slideDown(800);
    }
}

$(document).ready(function(){
    $('#monselect').change(changement);
});
