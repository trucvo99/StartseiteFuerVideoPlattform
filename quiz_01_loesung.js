//Ein kleines Quiz zum Aufwärmen 

//FRAGE 1: Mit welchen Schlüsselwörtern werden Variablen in Javascript deklariert? Was ist der Unterschied zwischen den beiden Schlüsselwörtern? 
//ANTOWORT 1: Variablen in Javascript werden entweder mit dem Schlüsselwort "const" oder "let" deklariert. 
//"const" wird verwendet, wenn sich die Werte der Variable nicht mehr ändern. "let" wird für veränderliche Werte von Variablen verwendet. 


//FRAGE 2: Finde den Fehler im folgenden Code-Snippet
/*
function countZeros(array) {  
    const count = 0;  
    for (const i = 0; i < array.length; i++) {  
        if (array[i] == 0) {  
            count++;
        } 
    }  
    return count;  
} */
//ANTWORT 2: Der Fehler liegt darin, dass die Variablen "count" und "i" als "const" deklariert wurde, obwohl sich ihr Wert in jedem Schleifendurchlauf verändert.
//Richtig: 
function countZeros(array) {  
    let count = 0;  
    for (let i = 0; i < array.length; i++) {  
        if (array[i] == 0) {  
            count++;
        } 
    }  
    return count;  
} 


//FRAGE 3: Wofür eignen sich Template Strings? 
//ANTWORT 3: Diese sind immer dann sinnvoll, wenn fester Text mit Werten von Variablen kombiniert werden soll.


//FRAGE 4: Wie werden Template-Strings gekennzeichnet und wie werden Variablen darin aufgerufen? 
//ANTWORT 4: Template-Strings werden mit einem schrägen Anführungsstrich (accent grave) gekennzeichnet. 
//Die Variblen werden innerhalb geschwungener Klammern mit einem vorangestellten Dollarzeichen aufgerufen.
//Beispiel: `${variable}`


//FRAGE 5: Gib die Variable "let string" als Template-String an. 
/*
let a = 5;  
let b = 6;  
const summe = a + b;  
let string = a + " + " + b + " = " + summe; // 5 + 6 = 11 */ 
//ANTWORT 5: 
string = `${a} + ${b} = ${summe}`; // 5 + 6 = 11 


//FRAGE 6: Das Objekt bicycle hat die drei Properties (Eigenschaften) type, gears und color. Auf diese wird mittels Index-Operator [] zugegriffen. 
/*
let bicycle = {}; // leeres Objekt  
bicycle["type"] = "Giro";  
bicycle["gears"] = 33;  
bicycle["color"] = "red"; */
//Gib mit einer for…in Schleife alle Werte des Objektes bicycle aus.
//ANTWORT 6:
for (property in bicycle) {  
    console.log(bicycle[property]);  
} 


//FRAGE 7: Initialisiere das Objekt bicycle aus Aufgabe 6 mittles JSON (Javascript Object Notation) – Syntax.  
//ANTWORT 7: 
let bicycle = {type: "Giro", gears: 33, color: "red"}; 


//FRAGE 8: Was unterscheidet Arrays in Java von Arrays in Javascript? 
//ANTWORT 8: Arrays in Javascript haben keine feste Länge, d.h. es können jederzeit weitere Elemente hinzugefügt werden.


//FRAGE 9: Was macht die for...of Schleife?
//ANTWORT 9: Die for...of Schleife durchläuft alle Werte eines Arrays. 
let names = ["Hanna", "Gert", "Ute"]; 
for (i of names){ 
    console.log(i);  
} 