/*
Aufgabe: Aufgabe 2
Name: Alea Flesch
Matrikel: 259109
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen
Code selbst in Zusammenarbeit mit Theresa Gut &
mit Unterstützung von Lukas und Anna geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Uno2 {

    document.addEventListener("DOMContentLoaded", main);

    //interface
    interface Card {
        color: string;
        value: string;
    }

    //Deklaration    
    let handcards: Card[];
    let colors: string[] = ["Red", "Blue", "Green", "Yellow"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck: Card[]

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                let card: Card = { color: colors[i], value: values[a] };
                deck.push(card);
            }
        }
    }

    //promt function
    let x: number;
    function main(): void {
        let y: string = prompt("Wie viele Karten möchtest du?");
        x = Number(y);

        //Aufruf der Funktion        
        random();
    }



    //random    
    function random() {
        for (let k: number = 0; k < x; k++) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);                                      //Karte von deck in handcard kopiert       
            deck.splice(r);                                                  //kopierte Karte wurde aus deck gelöscht 
        }
    }


    // Inhalte für HTML

    function placeDiv(_color: string, _v: string, _y: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        div.setAttribute("id", "a" + _y);
        document.getElementById("a" + _y).innerHTML += _v;
        let s: CSSStyleDeclaration = div.style;
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
        }  //Schrift bei schwarzen und blauen Karten in weiß geändert


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
}









