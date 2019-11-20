var bleu = prompt('Bleu initial:', 0);
var div = document.getElementById('couleur');
var html = "<table>";
for (var rouge = 0; rouge < 16*16; rouge+=16) {
    html += "<tr>";
    for (var vert = 0; vert < 16*16; vert+=16) {
        html += "<th style='background-color:rgb(" + rouge + "," + vert + "," + bleu + ");width:16px;height:16px'></th>";
    }
    html += "</tr>";
}
html += "</table>";
div.innerHTML = html;

// Création des éléments via createElement
//var bleu = prompt('Bleu initial:', 0);
//var div = document.getElementById('couleur');
//var table = div.appendChild(document.createElement("table"));
//for (var i=0; i<16*16; i+=16)
//{
//    var tr = table.appendChild(document.createElement("tr"));
//    for (var j=0; j<16*16; j+=16)
//    {
//        var td = tr.appendChild(document.createElement("td"));
//        var color = "rgb("+i+","+j+","+bleu+")";
//        td.setAttribute("style", "width:16px; height:16px; background-color:"+color+";");
//    }
//}
