/*
Aufgabe: Aufgabe 2
Name: Alea Flesch
Matrikel: 259109
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen Code selbst in Zusammenarbeit mit Theresa Gut &
mit Unterstützung von Lukas und Anna geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Uno2 {

    document.addEventListener("DOMContentLoaded", main);

    //interface
    interface Card {
        color: string;
        value: string;
    }

    //Deklaration    
    let handcards: Card[] = [];
    let colors: string[] = ["Red", "Blue", "Green", "Yellow"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck: Card[] = [{ color: "Red", value: "0" }, { color: "Blue", value: "0" }, { color: "Green", value: "0" }, { color: "Yellow", value: "0" }, { color: "Black", value: "+4" }, { color: "Black", value: "+4" }, { color: "Black", value: "wish" }, { color: "Black", value: "wish" }];

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
            deck.splice(r, 1);                                                  //kopierte Karte wurde aus deck gelöscht 
        }
    }


    // Inhalte für HTML

    for (let h: number = 0; h < handcards.length; h++) {
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Handkarten").appendChild(div);
        div.innerHTML = handcards[h].value;
        div.classList.add("Handkarten");
        div.classList.add(handcards[h].color);
    }


}






