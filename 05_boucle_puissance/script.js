var divtable = document.getElementById('table');
var base = 3;
var html = '';
html = html + "<table class='table table-striped'>";
html = html + "<thead><tr><th>Puissance</th><th>Résultat</th></tr></thead>";
html = html + "<tbody>";
//Boucle
for(var i = 0; i <= 30; i++) {
  var result = Math.pow(base, i);
  html += "<tr><td>" + base + "<sup>" + i + "</sup></td><td>" + result + "</td></tr>";
}
html = html + "</tbody></table>";
divtable.innerHTML = html;
