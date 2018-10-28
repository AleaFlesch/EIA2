/*
Aufgabe: Aufgabe 2
Name: Alea Flesch
Matrikel: 259109
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen Code selbst in Zusammenarbeit mit Theresa Gut &
mit Unterst�tzung von Lukas und Anna geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Uno2;
(function (Uno2) {
    document.addEventListener("DOMContentLoaded", main);
    //Deklaration    
    let handcards = [];
    let colors = ["Red", "Blue", "Green", "Yellow"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck = [{ color: "Red", value: "0" }, { color: "Blue", value: "0" }, { color: "Green", value: "0" }, { color: "Yellow", value: "0" }, { color: "Black", value: "+4" }, { color: "Black", value: "+4" }, { color: "Black", value: "wish" }, { color: "Black", value: "wish" }];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }
    console.log(deck);
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
            deck.splice(r, 1); //kopierte Karte wurde aus deck gel�scht 
        }
    }
    // Inhalte f�r HTML
    for (let h = 0; h < handcards.length; h++) {
        let div = document.createElement("div");
        document.getElementById("Handkarten").appendChild(div);
        div.innerHTML = handcards[h].value;
        div.classList.add("Handkarten");
        div.classList.add(handcards[h].color);
    }
})(Uno2 || (Uno2 = {}));
//# sourceMappingURL=Aufgabe2.js.map