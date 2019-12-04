//this = L'objet JavaScript représentant le contexte dans lequel le code courant est exécuté.
//dans le cas de la fonction changement, la valeur "this" sera l'élément qui exécute la fonction. Ici: l'élement select
$(document).ready(function(){
    $('#monselect').change(function() {
//        alert('Changement dans le select:' + $('#monselect').val());
//        alert('Changement dans le select:' + $(this).val());
        $('.choix').slideUp(800);
        var valeur = $('#monselect').val();
        if ($('.choix:visible').length > 0) {
            $('#' + valeur).delay(1000).slideDown(800);
        }
        else {
            $('#' + valeur).slideDown(800);
        }
    });
});
