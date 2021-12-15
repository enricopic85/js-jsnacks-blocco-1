//Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente. (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)

let num=parseInt(prompt("inserisci un numero"));
// let potenza;
let risultato;
while (num > 0) {
    potenza=num**3;
    console.log(potenza);
    num--;
}


