function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return ageDate.getUTCFullYear() - 1970;
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
        var r = new FileReader();
        r.onload = function(e) {
            var contents = e.target.result;
//            var contents = r.result;
            var lines = JSON.parse(contents);
            render(lines);
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
