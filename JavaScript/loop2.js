var odogovor=prompt("Da li ste jos tu ?");
 // odgovor.indexof("yes") -indexof ce vratiti index prvog slova rijeci koje smo naveli u zagradi ukolik ose ta rijec nalazi u rijeci koju ispitujemo 
 // Ukoliko ne postoji takva rijec u datom stringu kao rezultat vraca -1 
 // U nasem slucaju dokle god se u stringu koji unesemo putem prompta ne pojavi rijec yes while petlja se nece zavristi
while(odogovor.indexOf("yes")===-1){
    alert(" Yee pogodili ste");
}