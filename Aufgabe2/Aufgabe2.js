var Uno2;
(function (Uno2) {
    //Deklaration    
    let handcards;
    let colors = ["Red", "Blue", "Green", "Yellow"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck;
    //promt function
    function main() {
        let x;
        let y = prompt("Wie viele Karten m�chtest du?");
        x = Number(y);
        for (let i = 0; i < colors.length; i++) {
            for (let a = 0; a < values.length; a++) {
                for (let z = 0; z < 2; z++) {
                    let card = { color: colors[i], value: values[a] };
                    deck.push(card);
                }
            }
        }
        //rand    
        function random(n) {
            return Math.floor(Math.random() * Math.floor(n));
        }
    }
})(Uno2 || (Uno2 = {}));
//# sourceMappingURL=Aufgabe2.js.map