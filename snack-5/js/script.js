let arr=[];
let somma=0;
i=0;
do {
  arr.push(parseInt(prompt("inserisci un numero")));
  somma += arr[i];
  alert(`la tua somma è ${somma}`);
  i++;  
 
} while (somma < 50);