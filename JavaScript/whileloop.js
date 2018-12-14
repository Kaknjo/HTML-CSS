// Ispis brojeva od -19 do 20 
var broj=-19;

while(broj<20){
    console.log(broj);
    broj++;
}
// Ispis parnih brojeva izmedu 0 i 100
console.log ("Svi parni brojevi izmedu 0 i 100 su :")
var brojac=1;
while(brojac<=100){
    if(brojac%2===0){
        console.log(brojac);
    }
    brojac++;
}
// Ispis brojeva djeljivih sa 3 i 5 izmedu 300 i 333 ukljucujuci i 300 i 333
console.log("Brojevi koji su djeljivi i sa 3 i sa 5 izmedu 300 i 333 su ;");
var brojac1=300;
while(brojac1<=333){
    if(brojac1%5===0 && brojac1%3===0){
        console.log(brojac1);
    }
    brojac1++;
}