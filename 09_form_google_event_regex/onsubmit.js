//fonction nommée. Ici le nom est validation.
//appel de la fonction: validation(parametre)
//function validation(e){
//    console.log(e.type);
//    var value = e.srcElement.q.value; // ou e.srcElement.elements.q.value
//    if(!value){
//        alert('Tu ne recherches rien...');
//        e.preventDefault(); // Ne pas prendre en compte l'action par défaut de l'event
//    }
//}











function validation(e) {
    if(!e.srcElement.q.value){
        alert("Il n'y a rien dans l'input text");
        e.preventDefault();
    }
}
