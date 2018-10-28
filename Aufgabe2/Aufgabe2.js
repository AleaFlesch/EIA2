/*
Aufgabe: Aufgabe 2
Name: Alea Flesch
Matrikel: 259109
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen
Code selbst in Zusammenarbeit mit Theresa Gut &
mit Unterst�tzung von Lukas und Anna geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Uno2;
(function (Uno2) {
    document.addEventListener("DOMContentLoaded", main);
    //Deklaration    
    let handcards;
    let colors = ["Red", "Blue", "Green", "Yellow"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck;
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }
    //promt function
    let x;
    function main() {
        let y = prompt("Wie viele Karten m�chtest du?");
        x = Number(y);
        //Aufruf der Funktion        
        random();
    }
    //random    
    function random() {
        for (let k = 0; k < x; k++) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]); //Karte von deck in handcard kopiert       
            deck.splice(r); //kopierte Karte wurde aus deck gel�scht 
        }
    }
    // Inhalte f�r HTML
    function placeDiv(_color, _v, _y) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _y);
        document.getElementById("a" + _y).innerHTML += _v;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 100 + "px";
        s.height = 200 + "px";
        s.left = (_y + 0.2) * 110 + "px";
        s.bottom = 40 + "px";
        if (_color == "black") {
            s.color = "white";
        }
        if (_color == "blue") {
            s.color = "white";
        } //Schrift bei schwarzen und blauen Karten in wei� ge�ndert
    }
    function Stapel() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "CardDeck");
        document.getElementById("CardDeck").innerHTML += "CardDeck";
        let s = div.style;
        s.border = "solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "lightgray";
        s.width = 100 + "px";
        s.height = 200 + "px";
        s.left = 50 + "px";
        s.top = 20 + "px";
    }
    function DiscardDeck() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "DiscardDeck");
        document.getElementById("DiscardDeck").innerHTML += "DiscardDeck";
        let s = div.style;
        s.border = "solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "grey";
        s.width = 100 + "px";
        s.height = 200 + "px";
        s.right = 50 + "px";
        s.top = 20 + "px";
    }
    DiscardDeck();
    Stapel();
})(Uno2 || (Uno2 = {}));
//# sourceMappingURL=Aufgabe2.js.map