var slike = new Array();
slike[0] = "slika1.jpg";
slike[1] = "slika2.jpg";
slike[2] = "slika3.jpg";
slike[3] = "slika4.jpg";

var trenutnaSlika = 0;
var ukupnoSlika = slike.length;

function next() {
    trenutnaSlika++;
    if (trenutnaSlika == ukupnoSlika) trenutnaSlika = 0;
    document.getElementById("slika").src = slike[trenutnaSlika];
}

function back() {
    trenutnaSlika--;
    if (trenutnaSlika == -1) trenutnaSlika = ukupnoSlika - 1;
    document.getElementById("slika").src = slike[trenutnaSlika];
}

var stoperica;

function slide() {
    // Zamišljajte setInterval kao štopericu koja svaki put kada otkuca, izvrši neki zadatak. 
    stoperica = setInterval(next, 1000);
}

function slideStop() {
    // Zamišljajte clearInterval kao dugme za zaustavljanje štoperice. 
    // Kada ga pritisnete, štoperica staje i prestaje sa otkucavanjem.
    clearInterval(stoperica);
}
