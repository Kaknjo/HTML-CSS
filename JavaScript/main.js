var tajnibroj=4;// Definisanje varijable u JavaScriptu
// Smjestamo u varijablu pokusajBroj string koji se unese u prompt tj prozor koji se pojavi kada otvorimo stranicu 
var pokusajBroj=prompt("Pogodite broj");
alert(pokusajBroj);// Ispisujemo broj koji smo unijeli 
var pokusaj=Number(pokusajBroj);// Pretvaramo string koji smo smjestili u varijablu pokusajBroj u broj i smjetstamo u novu varijablu pokusaj
// === - oznacava da jednakosti moraju biti jednakog i znaka i tipa
if(pokusaj===tajnibroj){
    alert("Cestitamo pogodili ste broj ");
}
else if (pokusajBroj<tajnibroj){
    alert("Broj koji se trazi je veci pokusajte ponovo");
}
else{
    alert("Broj koji se trazi je manji od unesenog, molimo pokusajte ponovo");
}