

let sum=0;
for(i=0;i<10;i++){
    let inputUser=parseInt(prompt("inserisci un numero"));
     sum += inputUser;
}
document.getElementById("user").innerHTML=sum;