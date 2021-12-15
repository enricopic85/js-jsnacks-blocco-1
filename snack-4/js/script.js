//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
 const num=prompt("inserisci un numero");
 let somma=0;
 let check=false;
 for(i=0; i<num.length;i++){
     somma +=parseInt(num[i]);
     if(num.length !==4){
         check=true;
     }
 }
 if (check) {
     alert("devi inserire massimo 4 numeri")
 }
 console.log(somma);

