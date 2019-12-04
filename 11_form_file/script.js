function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return ageDate.getUTCFullYear() - 1970;
}

// param: une liste ayant comme structure d'élément: "nom datenaissance"
// return: une liste contenant un dictionnaire par élément: {'name': value, 'date': value, 'age': value}
function getAges(list) {
    var result = [];
    for(var i in list){
        var split = list[i].split(' ');
        var dict = {};
        dict.name = split[0];
        dict.date = new Date(split[1]);
        dict.age = calculateAge(dict.date);
        result.push(dict);
    }
    return result;
}

function render(list) {
    var table = document.getElementById('table');
    var html = "<table>";
    for(var i in list) {
        html += "<tr>";
        html += "<td>Nom: " + list[i].name + "</td>";
        var date = list[i].date.getDate() + "/" + (list[i].date.getMonth() + 1) + "/" + list[i].date.getFullYear();
        html += "<td> Date de naissance: " + date + "</td>";
        html += "<td> Age: " + list[i].age + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    table.innerHTML = html;
}

function readSingleFile(file) {
    if (file) {
        var r = new FileReader();
        r.onload = function(e) {
            var contents = e.target.result;
//            var contents = r.result;
            var lines = contents.split('\n').filter(function(item) {return item;});
//          var lines = contents.split('\n').filter(item => item);
//            https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
            var result = getAges(lines);
            render(result);
        };
        r.readAsText(file);
    } else {
        alert("Failed to load file");
    }
}

function calculateAgesByFile(e, file) {
    console.log(file);
    readSingleFile(file);
    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fichier').addEventListener("change", function() {calculateAgesByFile(event, this.files[0]);});
});
