namespace Uno {
    
    var red: string= "#FF0000";                    // Farbzuweisung in CSS? Wie verknüft man das mit Zahlen in Array?
    var blue: string= "#0000FF";
    var green: string= "##00FF00";
    var yellow: string= "##FFFF00";
    var black: string= "#00000";
    
    var Handkarten: number [][]=[];                                                     // leeres Array, in welches am Schluss die zufällig ausgwählten Karten eingetragen werden -> zur Ausgabe in HTML
    var Karten: number [][]=[[0,0],[0,1], ];                                            // Array in welchem alle vorhandenen Karten gespeichert sind
    
    function Funktion(): void {                                                         // Funktion zur Darstellung einer variablen Anzahl an Karten
        var Anzahl : string = prompt("Wie viele Karten möchtest du auf die Hand?");     // Promp Anfragefenster in dem der User die Handkarten-Anzahl festlegt
    
            if (Anzahl != null) {                                       // Falls die Anzahl nicht "null" entspricht...                                          
            document.getElementById("solution").innerHTML =             // ...soll in HTML...
            ""  +  Handkarten;                                          // ... das Array Handkarten ausgegeben werden.
            }
        
        for (var i: number=0; i<Anzahl; i++) {                          // for Schleife um Karten zu generieren, solange wie i kleiner ist als Anzahl
            function getRandomInt(max) {                                // Funktion für zufällige Karten
                return Math.floor(Math.random() * Math.floor(max));     // zufällige Zahl wird zurückgegeben
            }
    
            console.log(Math.random());         // Output zufälliger Karten: Nummer zwischen 0 und 1
        }     
    }

    console.log("" + Funktion);                 // Output Funktion Anzahl 
    
    Handkarten [i]=Karten[Math.random];         // Zuweisung zufälliger Karten in Handkarten Array
    

    
}