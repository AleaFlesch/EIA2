namespace Uno2 {

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

    //promt function
    function main() {
        let x: number;
        let y: string = prompt("Wie viele Karten möchtest du?");
        x = Number(y);

        for (let i: number = 0; i < colors.length; i++) {
            for (let a: number = 0; a < values.length; a++) {
                for (let z: number = 0; z < 2; z++) {
                    let card: Card = {color : colors[i], value : values[a]};
                    deck.push(card);
                }
            }
        }

        //rand    
        function random(n: number) {
            return Math.floor(Math.random() * Math.floor(n));
        }


    }
}