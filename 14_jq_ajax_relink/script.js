
$(document).ready(function(){
    $('#monform').submit(function(e) {
        e.preventDefault();
        var data = $('#monform').serialize(); //https://api.jquery.com/serialize/
        $.ajax({
            url: 'https://rel.ink/api/links/', // url à contacter
            type:'POST', // type de requête http. Soit POST soit GET
            dataType:'json', // type de la donnée retournée par l'url qu'on contact
            data: data, // les données à envoyer. Format: macle1=mavaleur1&macle2=mavaleur2&...
            success: function(resultat, statut){ // fonction anonyme exécutée en cas de succès
                var url = "https://rel.ink/" + resultat.hashid;
                $("#resultat").html("<a href='"+url+"'>"+url+"</a>");
            },
            error: function(resultat, statut, erreur){ // fonction anonyme exécutée en cas d'erreur
                $("#resultat").html("<div>" + statut + "</div>");
            },
            complete : function(resultat, statut){ // fonction anonyme exécutée une fois l'appel AJAX effecuté

            },
        });
    });
});
