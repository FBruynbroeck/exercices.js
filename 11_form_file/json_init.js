function calculateAge(birthday) {
   //calculer
   var age = new Date(new Date() - new Date(birthday)).getUTCFullYear() - 1970;
   return age;
}

function render(list) {
    var table = document.getElementById('table');
    var html = "<table>";
    for(var i in list) {
        html += "<tr>";
        html += "<td>Nom: " + list[i].name + "</td>";
        var date = new Date(list[i].date);
        var datestring = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        var age = calculateAge(date);
        html += "<td> Date de naissance: " + datestring + "</td>";
        html += "<td> Age: " + age + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    table.innerHTML = html;
}

function readSingleFile(file) {
    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var liste = JSON.parse(reader.result);
            render(liste);
        };
        reader.readAsText(file);
    } else {
        alert("Failed to load file");
    }
}

function calculateAgesByFile(e) {
    var file = e.srcElement.files[0];
    console.log(file);
    readSingleFile(file);
    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fichier').addEventListener("change", function() {calculateAgesByFile(event);});
});
