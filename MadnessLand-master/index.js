var catData = [
    "Jeffery",
    3,
    "Mittens",
    4,
    "Scooter",
    2,
    "Wilson",
    1,
    "Jeremy",
    11,
    "Alphonse",
    0,
];
for (var i = 0; i < catData.length; i++) { }
var cats = catData
    .filter(function (data) { return typeof data === "string"; })
    .map(function (data, i) {
    return {
        name: data,
        age: catData[i + 1]
    };
});
document.body.innerHTML = "\n  <ul>\n    ".concat(cats.map(function (cat) { return "<li>".concat(cat.name, " - ").concat(cat.age, "</li>"); }).join(""), "\n  </ul>\n");
