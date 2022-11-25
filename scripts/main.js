import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById("series");
var seasonsAverageElm = document.getElementById("seasonsAverage");
renderSerieInTable(dataSeries);
seasonsAverageElm.innerHTML = "Seasons average: ".concat(getSeasonsAverage(dataSeries));
function renderSerieInTable(series) {
    console.log('Cargando series');
    series.forEach(function (series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series.id, "</td>\n                             <td style=\"color: DodgerBlue;\">").concat(series.name, "</td>\n                             <td>").concat(series.channel, "</td>\n                             <td>").concat(series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return renderCard(series); });
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    dataSeries.forEach(function (series) { return totalSeasons = totalSeasons + series.seasons; });
    var seasonsAverage = totalSeasons / dataSeries.length;
    return seasonsAverage;
}
function renderCard(serie) {
    var card = document.getElementById("idcard");
    card.innerHTML = "<div class=\"card\" id=\"idcard\">\n    <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"Image\" >\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">").concat(serie.name, "</h4>\n      <p class=\"card-text\">").concat(serie.description, "</p>\n      <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n    </div>\n  </div>");
}
