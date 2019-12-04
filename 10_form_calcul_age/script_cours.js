// fonction qui va calculer l'âge sur base d'une date de naissance
function calculateAge(birthday) {
   //calculer
   var age = new Date(new Date() - new Date(birthday)).getUTCFullYear() - 1970;
   return age;
}

// fonction qui va afficher l'âge sur base de l'input date
function displayAge(e) {
    console.log('Ok');
    var value = e.srcElement.date.value;
    var age = calculateAge(value);
    console.log(age);
    document.getElementById('age').innerHTML = age;
    // ici on va faire appel à la fonciton calculateAge en envoyant la date. La fonction retournera l'âge.
    // on récupère ensuite l'âge dans une variable pour enfin l'afficher.
    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('monform').addEventListener("submit", function() {displayAge(event);});
});
