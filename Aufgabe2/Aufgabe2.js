var Uno;
(function (Uno) {
    var Handkarten = [];
    var Karten = [[0, 0], [0, 1],];
    function Funktion() {
        var Anzahl = prompt("Wie viele Karten m�chtest du auf die Hand?");
        if (Anzahl != null) {
            document.getElementById("solution").innerHTML =
                "" + Anzahl;
        }
    }
    console.log("" + Funktion);
})(Uno || (Uno = {}));
//# sourceMappingURL=Aufgabe2.js.map