namespace Uno {
    
    var red: string= "#FF0000";                    // Farbzuweisung in CSS? Wie verkn�ft man das mit Zahlen in Array?
    var blue: string= "#0000FF";
    var green: string= "##00FF00";
    var yellow: string= "##FFFF00";
    var black: string= "#00000";
    
    var Handkarten: number [][]=[];                                                     // leeres Array, in welches am Schluss die zuf�llig ausgw�hlten Karten eingetragen werden -> zur Ausgabe in HTML
    var Karten: number [][]=[[0,0],[0,1], ];                                            // Array in welchem alle vorhandenen Karten gespeichert sind
    
    function Funktion(): void {                                                         // Funktion zur Darstellung einer variablen Anzahl an Karten
        var Anzahl : string = prompt("Wie viele Karten m�chtest du auf die Hand?");     // Promp Anfragefenster in dem der User die Handkarten-Anzahl festlegt
    
            if (Anzahl != null) {                                       // Falls die Anzahl nicht "null" entspricht...                                          
            document.getElementById("solution").innerHTML =             // ...soll in HTML...
            ""  +  Handkarten;                                          // ... das Array Handkarten ausgegeben werden.
            }
        
        for (var i: number=0; i<Anzahl; i++) {                          // for Schleife um Karten zu generieren, solange wie i kleiner ist als Anzahl
            function getRandomInt(max) {                                // Funktion f�r zuf�llige Karten
                return Math.floor(Math.random() * Math.floor(max));     // zuf�llige Zahl wird zur�ckgegeben
            }
    
            console.log(Math.random());         // Output zuf�lliger Karten: Nummer zwischen 0 und 1
        }     
    }

    console.log("" + Funktion);                 // Output Funktion Anzahl 
    
    Handkarten [i]=Karten[Math.random];         // Zuweisung zuf�lliger Karten in Handkarten Array
    

    
}